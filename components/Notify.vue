<template>
  <v-snackbar v-model="snackbar">
    {{ text }}
    <v-btn text :timeout="timeout" @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "Notify",
  props: {
    text: {
      type: String,
      default: null,
    },
    timeout: {
      type: Number,
      default: 4000,
    },
    snackbar: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
