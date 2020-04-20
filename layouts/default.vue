<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <cookies-notify />
  </v-app>
</template>

<script>
import CookieNotify from "../components/CookieNotice"

export default {
  components: {
    "cookies-notify": CookieNotify,
  },
  data: () => ({}),
}
</script>
