export default ({ store, redirect, route }) => {
  const guestRoutes = [
    "auth-signin",
    "auth-signup",
    "auth-reset",
    "auth-password",
  ]

  console.log(
    guestRoutes.map((d) => (route.name || []).includes(d)).includes(true)
  )

  if (
    !store.state.user.isAuthenticated &&
    !guestRoutes.map((d) => (route.name || []).includes(d)).includes(true)
  ) {
    redirect("/auth/signin")
  }
}
