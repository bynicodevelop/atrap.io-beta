<template>
  <v-flex class="mt-10">
    <h1>{{ $t("password.h1") }}</h1>

    <p class="subtitle-1">
      {{ $t("password.explain") }}
    </p>

    <v-form ref="form" v-model="valid" autocomplete="off" lazy-validation>
      <v-text-field
        id="password"
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        :rules="passwordRules"
        :label="$t('password.form.password.label')"
        required
        @click:append="show = !show"
      />

      <v-btn :disabled="!valid" @click="doReset">
        {{ $t("password.button") }}
      </v-btn>
    </v-form>

    <nuxt-link to="/auth/reset">
      {{ $t("password.reset") }}
    </nuxt-link>

    <notify :snackbar="snackbar" :text="message" />
  </v-flex>
</template>

<script>
import { mapActions } from "vuex"
import Notify from "../../components/Notify"
export default {
  name: "Password",
  components: {
    notify: Notify,
  },
  data: () => ({
    snackbar: false,
    message: "",
    valid: false,
    show: false,
    password: "",
    passwordRules: [],
  }),
  watch: {
    valid() {
      this.valid = this.password !== ""
    },
  },
  mounted() {
    this.passwordRules = [
      (v) => !!v || this.$t("password.form.password.validation.require"),
      (v) =>
        v.length >= 6 || this.$t("password.form.password.validation.secured"),
    ]
  },
  methods: {
    ...mapActions({
      resetPassword: "user/resetPassword",
    }),
    async doReset() {
      try {
        await this.resetPassword({
          password: this.password,
          code: this.$route.query.oobCode,
        })

        this.snackbar = true
        this.message = this.$t("password.snackbar.message.success")
      } catch (e) {
        this.snackbar = true
        this.message = this.$t("password.snackbar.message.error")
      }
    },
  },
}
</script>
