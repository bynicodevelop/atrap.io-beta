<template>
  <v-flex class="mt-10">
    <v-stepper v-model="step">
      <v-stepper-items>
        <v-stepper-content step="1">
          <div class="text-center">
            <v-icon class="display-2">
              mdi-account
            </v-icon>
          </div>

          <h1>{{ $t("profile.step1.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("profile.step1.explain") }}
          </p>

          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline">
                Email
              </div>
              <v-list-item-title class="headline mb-1">
                {{ email }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-btn @click="step++">
            Modifier mon profil
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <div class="text-center">
            <v-icon class="display-2">
              mdi-lock-outline
            </v-icon>
          </div>

          <h1>{{ $t("profile.step2.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("profile.step2.explain") }}
          </p>

          <v-form
            ref="form"
            v-model="validPassword"
            autocomplete="off"
            lazy-validation
          >
            <v-text-field
              id="password"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="passwordRules"
              :label="$t('profile.step2.form.password.label')"
              required
              @click:append="show = !show"
            />

            <v-btn :disabled="!validPassword" @click="doUnLock">
              {{ $t("profile.step2.form.btn.label") }}
            </v-btn>
          </v-form>
        </v-stepper-content>

        <v-stepper-content step="3">
          <div class="text-center">
            <v-icon class="display-2">
              mdi-lock-open-outline
            </v-icon>
          </div>

          <h1>{{ $t("profile.step3.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("profile.step3.explain") }}
          </p>

          <v-form
            ref="form"
            v-model="validEmail"
            autocomplete="off"
            lazy-validation
          >
            <v-text-field
              id="email"
              v-model="email"
              type="email"
              :rules="emailRules"
              :label="$t('profile.step3.form.email.label')"
              required
            />

            <v-text-field
              id="newPassword"
              v-model="newPassword"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="passwordRules"
              :label="$t('profile.step3.form.password.label')"
              required
              @click:append="show = !show"
            />

            <v-btn :disabled="!validEmail" @click="doUpdate">
              {{ $t("profile.step3.form.btn.label") }}
            </v-btn>
          </v-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <notify :snackbar="snackbar" :text="message" />
  </v-flex>
</template>

<script>
import formRules from "../../common/formRules"
import { mapActions } from "vuex"
import Notify from "../../components/Notify"
import { ProfileUpdateException } from "../../exceptions/ProfileUpdateException"

export default {
  layout: "admin",
  name: "Profile",
  components: {
    notify: Notify,
  },
  data: () => ({
    snackbar: false,
    message: "",
    show: false,
    step: 1,
    validPassword: false,
    validEmail: false,
    password: "",
    newPassword: "",
    passwordRules: [],
    emailChange: "",
    emailRules: [],
  }),
  computed: {
    email: {
      get() {
        return this.$store.state.user.data.email
      },
      set(value) {
        this.emailChange = value
      },
    },
  },
  mounted() {
    this.validPassword = !this.validPassword

    this.passwordRules = formRules.passwordRules
    this.emailRules = formRules.emailRules
  },
  methods: {
    ...mapActions({
      unlock: "user/unlock",
      updateProfile: "user/updateProfile",
    }),
    async doUnLock() {
      this.snackbar = false

      try {
        await this.unlock(this.password)

        this.step++

        this.password = ""
      } catch (e) {
        this.message = this.$t("profile.snackbar.error.wrongPassword")
        this.snackbar = true
      }
    },
    async doUpdate() {
      this.snackbar = false
      try {
        await this.updateProfile({
          email: this.emailChange,
          password: this.newPassword,
        })
        this.step = 1
        this.message = this.$t("profile.snackbar.success")
        this.snackbar = true
        this.newPassword = ""
      } catch (e) {
        if (e instanceof ProfileUpdateException) {
          this.message = this.$t("profile.snackbar.error.unexpectedError")
          this.snackbar = true
        }
      }
    },
  },
}
</script>
