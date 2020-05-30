<template>
  <v-fab-transition>
    <v-speed-dial
      v-model="fab"
      color="pink mb-12"
      dark
      absolute
      bottom
      right
      fab
      direction="top"
      :open-on-hover="false"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-link</v-icon>
      </v-btn>
      <v-btn fab dark small color="green">
        <v-icon>mdi-window-restore</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-fab-transition>
</template>

<script>
export default {
  name: "ToolBtn",
  data: () => ({
    fab: false,
  }),
}
</script>
