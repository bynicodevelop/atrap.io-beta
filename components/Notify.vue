<template>
  <v-snackbar v-model="show">
    {{ text }}
    <v-btn text :timeout="timeout" @click="updateSnackbar">
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
  data: () => ({
    show: false,
  }),
  watch: {
    snackbar() {
      this.show = this.snackbar
    },
  },
  methods: {
    updateSnackbar() {
      this.show = !this.show
    },
  },
}
</script>
