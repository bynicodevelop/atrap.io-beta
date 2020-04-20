export default ({ store, redirect, route }) => {
  const guestRoutes = [
    "auth-signin",
    "auth-signup",
    "auth-reset",
    "auth-password",
  ]

  if (!store.state.user.isAuthenticated && !guestRoutes.includes(route.name)) {
    redirect("/auth/signin")
  }
}
