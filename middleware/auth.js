export default ({ store, redirect, route }) => {
  const guestRoutes = [
    "auth-signin",
    "auth-signup",
    "auth-reset",
    "auth-password",
  ]

  if (
    !store.state.auth.isAuthenticated &&
    !guestRoutes.map((d) => (route.name || []).includes(d)).includes(true)
  ) {
    redirect("/auth/signin")
  }
}
