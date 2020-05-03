<template>
  <v-flex class="mt-10">
    <h1>{{ $t("reset.h1") }}</h1>

    <p class="subtitle-1">
      {{ $t("reset.explain") }}
    </p>

    <v-form ref="form" v-model="valid" autocomplete="off" lazy-validation>
      <v-text-field
        id="email"
        v-model="email"
        type="email"
        :rules="emailRules"
        :label="$t('reset.form.email.label')"
        required
      />

      <v-btn :disabled="!valid" @click="doReset">
        {{ $t("reset.button") }}
      </v-btn>
    </v-form>

    <nuxt-link to="/auth/signin">
      {{ $t("reset.signin") }}
    </nuxt-link>

    <notify :snackbar="snackbar" :text="message" />
  </v-flex>
</template>

<script>
import { mapActions } from "vuex"
import Notify from "../../components/Notify"

export default {
  name: "Reset",
  components: {
    notify: Notify,
  },
  data: () => ({
    snackbar: false,
    message: "",
    valid: false,
    email: "",
    emailRules: [],
  }),
  watch: {
    valid() {
      this.valid = this.email !== ""
    },
  },
  mounted() {
    this.valid = !this.valid

    this.emailRules = [
      (v) => !!v || this.$t("reset.form.email.validation.require"),
      (v) =>
        /.+@.+\..+/.test(v) || this.$t("reset.form.email.validation.valid"),
    ]
  },
  methods: {
    ...mapActions({
      reset: "user/reset",
    }),
    doReset() {
      this.reset(this.email)
      this.snackbar = true
      this.message = this.$t("reset.snackbar.message")
    },
  },
}
</script>
