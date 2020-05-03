<template>
  <v-flex class="mt-10">
    <h1>{{ $t("signin.h1") }}</h1>

    <p class="subtitle-1">
      {{ $t("signin.explain") }}
    </p>

    <v-form ref="form" v-model="valid" autocomplete="off" lazy-validation>
      <v-text-field
        id="email"
        v-model="email"
        type="email"
        :rules="emailRules"
        :label="$t('signin.form.email.label')"
        required
      />

      <v-text-field
        id="password"
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        :rules="passwordRules"
        :label="$t('signin.form.password.label')"
        required
        @click:append="show = !show"
      />

      <v-btn :disabled="!valid" @click="doSignin">
        {{ $t("signin.button") }}
      </v-btn>
    </v-form>

    <nuxt-link to="/auth/reset">
      {{ $t("signin.resetPassword") }}
    </nuxt-link>

    <notify :snackbar="snackbar" :text="message" />
  </v-flex>
</template>

<script>
import { mapActions } from "vuex"
import { SigninException } from "../../exceptions/SigninException"
import Notify from "../../components/Notify"
import formRules from "../../common/formRules"

export default {
  name: "Signin",
  components: {
    notify: Notify,
  },
  data: () => ({
    show: false,
    valid: false,

    snackbar: false,
    message: "",

    email: "",
    emailRules: [],

    password: "",
    passwordRules: [],
    avatar: "",
  }),
  watch: {
    valid() {
      this.valid = this.email !== "" && this.password !== ""
    },
  },
  mounted() {
    this.valid = !this.valid

    this.emailRules = formRules.emailRules

    this.passwordRules = formRules.passwordRules
  },
  methods: {
    ...mapActions({
      signin: "user/signin",
    }),
    async doSignin() {
      try {
        await this.signin({
          email: this.email,
          password: this.password,
        })

        await this.$router.replace({ path: "/" })
      } catch (e) {
        this.snackbar = true

        if (e instanceof SigninException) {
          this.message = this.$t("signin.error.loginFail")
        } else {
          this.message = this.$t("signin.error.unexpectedError")
        }
      }
    },
  },
}
</script>
