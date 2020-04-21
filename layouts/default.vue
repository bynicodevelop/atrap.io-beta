<template>
  <v-app>
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

export default {
  components: {
    "cookies-notify": CookieNotify,
  },
  data: () => ({}),
}
</script>
