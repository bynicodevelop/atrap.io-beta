<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <cookies-notify />
  </v-app>
</template>

<script>
    import CookieNotify from "../components/CookieNotify";

    export default {
        data: () => ({}),
        components: {
            'cookies-notify': CookieNotify
        }
    }
</script>
