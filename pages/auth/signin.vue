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
        :rules="emailRules"
        :label="$t('signin.form.email.label')"
        required
      />

      <v-text-field
        id="password"
        v-model="password"
        :rules="passwordRules"
        :label="$t('signin.form.password.label')"
        required
      />

      <v-btn :disabled="!valid" @click="signin({ email, password })">
        {{ $t("signin.button") }}
      </v-btn>
    </v-form>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Signin",
  data: () => ({
    valid: false,

    email: "",
    emailRules: [
      (v) => !!v || "Merci de saisir votre email principal",
      (v) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
    ],

    password: "",
    passwordRules: [(v) => !!v || "Merci de saisir un mot de passe"],
    avatar: "",
  }),
  mounted() {
    this.valid = !this.valid
  },
  methods: {
    ...mapActions({
      signin: "user/signin",
    }),
  },
  watch: {
    valid() {
      this.valid = this.email !== "" && this.password !== ""
    },
  },
}
</script>
