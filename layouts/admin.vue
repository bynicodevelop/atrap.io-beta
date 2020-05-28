<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-toolbar-title>
        <span class="title">{{ appName }}</span>
      </v-toolbar-title>

      <v-spacer />

      <v-menu left buttom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click.stop="drawer = !drawer">
            <v-avatar id="avatar" color="grey" size="30">
              <v-img :src="user.avatar" />
            </v-avatar>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container grid-list-md>
        <v-layout row>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="user.avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item id="profile" link to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ $t("layout.admin.nav.profile") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item id="logout" link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ $t("layout.admin.nav.signout") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data: () => ({
    appName: process.env.APP_NAME,
    drawer: false,
  }),
  computed: {
    user() {
      return this.$store.state.user.data
    },
  },
  mounted() {
    window.addEventListener("keyup", (e) =>
      e.key === "Escape" ? (this.drawer = false) : ""
    )

    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await this.getUser()
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    ...mapActions({
      getUser: "user/loadUserData",
      signOut: "user/signout",
    }),
    async logout() {
      await this.signOut()

      await this.$router.replace({ path: "/auth/signin" })
    },
  },
}
</script>
