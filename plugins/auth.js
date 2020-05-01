import firebase from "firebase"

export default ({ store }) => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      store.dispatch("auth/set", user)

      return resolve()
    })
  })
}
