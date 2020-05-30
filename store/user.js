import firebase from "firebase"
import { EmailAlreadyUserException } from "../exceptions/EmailAlreadyUserException"
import { SigninException } from "../exceptions/SigninException"
import { UnexpectedError } from "../exceptions/UnexpectedError"
import { ResetPasswordException } from "../exceptions/ResetPasswordException"
import { ProfileUpdateException } from "../exceptions/ProfileUpdateException"
import { UnLockException } from "../exceptions/UnLockException"
import { DeleteException } from "../exceptions/DeleteException"

export const state = () => ({
  uid: null,
  data: {},
})

export const mutations = {
  data(state, value) {
    state.uid = value.uid
    state.data = value.data
  },
  updateEmail(state, value) {
    state.data.email = value
  },
}

export const actions = {
  /**
   * Permet la création d'un compte utilisateur chez firebase
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async signup({ commit }, value) {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)

      await firebase.database().ref(`users/${user.user.uid}`).set({
        username: value.name,
        avatar: value.avatar,
      })
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        throw new EmailAlreadyUserException()
      }
    }
  },

  /**
   * Permet l'authentification d'un utilisateur
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async signin({ commit }, value) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
    } catch (e) {
      if (["auth/user-not-found", "auth/wrong-password"].includes(e.code)) {
        throw new SigninException()
      } else {
        throw new UnexpectedError()
      }
    }
  },

  /**
   * Permet de charger toutes les données utilisateur
   * @param commit
   * @returns {Promise<void>}
   */
  async loadUserData({ commit }) {
    try {
      const user = await firebase.auth().currentUser

      const data = await firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value")

      commit("data", {
        uid: user.uid,
        data: { ...{ email: user.email }, ...data.val() },
      })
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * Permet la deconnexion d'un utilisateur
   * @returns {Promise<void>}
   */
  async signout() {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * Permet d'envoyer un email de changement de mot de passe à l'utilisateur
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async reset({ commit }, value) {
    try {
      await firebase.auth().sendPasswordResetEmail(value, {
        url: `${process.env.BASE_URL}/auth/signin`,
      })
    } catch (e) {
      // No error possible
    }
  },

  /**
   * Permet la modification du mot de passe par
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async resetPassword({ commit }, value) {
    try {
      await firebase.auth().confirmPasswordReset(value.code, value.password)
    } catch (e) {
      const errorsCodes = [
        "auth/invalid-action-code",
        "auth/expired-action-code",
      ]

      if (errorsCodes.includes(e.code)) {
        throw new ResetPasswordException()
      }
    }
  },

  /**
   * Permet de débloquer l'accès à la mise à jour du profil
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async unlock({ commit }, value) {
    try {
      const user = firebase.auth().currentUser
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        value
      )

      await user.reauthenticateWithCredential(credential)
    } catch (e) {
      console.log(e)
      throw new UnLockException()
    }
  },

  /**
   * Permet de mettre à jour les informations du profil
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async updateProfile({ commit }, value) {
    try {
      const user = await firebase.auth().currentUser

      if (value.email !== "" && value.email !== user.email) {
        await user.updateEmail(value.email)

        commit("updateEmail", value.email)
      }

      if (value.password !== undefined && value.password !== "") {
        await user.updatePassword(value.password)
      }
    } catch (e) {
      console.log(e)
      throw new ProfileUpdateException()
    }
  },

  async deleteProfile() {
    const user = firebase.auth().currentUser

    try {
      await firebase.firestore().collection("users").doc(user.uid).delete()

      await user.delete()
    } catch (e) {
      console.log(e)
      throw new DeleteException()
    }
  },
}
