<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-toolbar-title>{{ appName }}</v-toolbar-title>

      <v-spacer />

      <v-avatar id="avatar" color="grey" size="30">
        <v-img :src="user.avatar"></v-img>
      </v-avatar>
    </v-app-bar>

    <v-content>
      <v-container grid-list-md>
        <v-layout row>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    appName: process.env.APP_NAME,
    user: {
      avatar: "",
    },
  }),
}
</script>
