<template>
  <v-alert
    v-model="cookies"
    color="blue-grey darken-4"
    close-text="Fermer"
    dark
    dismissible
    tile
    class="mb-0"
  >
    <small>{{ $t("cookies.content") }}</small>
  </v-alert>
</template>

<script>
export default {
  name: "CookiesNotify",
  computed: {
    cookies: {
      get() {
        return this.$cookies.get("cookies") === undefined
      },
      set() {
        this.$cookies.set("cookies", true, {
          path: "/",
          maxAge: 60 * 60 * 24 * 365,
        })
      },
    },
  },
}
</script>
