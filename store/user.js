import firebase from "firebase"
import { EmailAlreadyUser } from "../exceptions/EmailAlreadyUser"

export const actions = {
  /**
   * Permet la création d'un compte utilisateur chez firebase
   * @param commit
   * @param value
   * @returns {Promise<void>}
   */
  async register({ commit }, value) {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)

      await firebase.database().ref(`users/${user.user.uid}`).set({
        username: value.name,
        profile_picture: value.avatar,
      })
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        throw new EmailAlreadyUser()
      }
    }
  },
}
