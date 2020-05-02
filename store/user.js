import firebase from "firebase"
import { EmailAlreadyUserException } from "../exceptions/EmailAlreadyUserException"
import { SigninException } from "../exceptions/SigninException"
import { UnexpectedError } from "../exceptions/UnexpectedError"

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
}
