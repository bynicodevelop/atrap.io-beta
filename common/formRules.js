/*global $nuxt*/
export default {
  emailRules: [
    (v) => !!v || $nuxt.$t("common.form.email.validation.require"),
    (v) =>
      /.+@.+\..+/.test(v) || $nuxt.$t("common.form.email.validation.valid"),
  ],

  passwordRules: [
    (v) => !!v || $nuxt.$t("common.form.password.validation.require"),
    (v) => v.length >= 6 || $nuxt.$t("common.form.password.validation.secured"),
  ],

  nameRules: [(v) => !!v || $nuxt.$t("common.form.name.validation.require")],
}
