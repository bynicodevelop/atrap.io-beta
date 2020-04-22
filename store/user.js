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
      await firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        throw new EmailAlreadyUser()
      }
    }
  },
}
