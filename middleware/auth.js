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

  if (
    (route.query.oobCode === undefined || route.query.oobCode === "") &&
    route.name.includes("auth-password")
  ) {
    redirect("/auth/signin")
  }

  if (
    store.state.auth.isAuthenticated &&
    guestRoutes.map((d) => (route.name || []).includes(d)).includes(true)
  ) {
    redirect("/")
  }
}
