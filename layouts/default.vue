<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-toolbar-title>{{ appName }}</v-toolbar-title>

      <v-spacer />

      <v-btn text :to="`/auth/${signTo}`">
        {{ signBtn }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container grid-list-md>
        <v-layout row>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>

    <cookies-notify />
  </v-app>
</template>

<script>
import CookieNotify from "../components/CookieNotice"

const routesName = ["auth-signup", "auth-forgot", "auth-reset"]

export default {
  components: {
    "cookies-notify": CookieNotify,
  },
  data: () => ({
    appName: process.env.APP_NAME,
    signBtn: "",
    signTo: routesName
      .map((d) => window.$nuxt.$route.name.includes(d))
      .includes(true)
      ? "signin"
      : "signup",
  }),
  watch: {
    $route() {
      this.signBtn = routesName
        .map((d) => window.$nuxt.$route.name.includes(d))
        .includes(true)
        ? this.$t("layout.default.nav.button.signin")
        : this.$t("layout.default.nav.button.signup")
      this.signTo = routesName
        .map((d) => window.$nuxt.$route.name.includes(d))
        .includes(true)
        ? "signin"
        : "signup"
    },
  },
  mounted() {
    this.signBtn = routesName
      .map((d) => window.$nuxt.$route.name.includes(d))
      .includes(true)
      ? this.$t("layout.default.nav.button.signin")
      : this.$t("layout.default.nav.button.signup")
  },
}
</script>
