<template>
  <v-flex class="mt-10">
    <v-stepper v-model="step">
      <v-stepper-items>
        <v-stepper-content step="1">
          <h1>{{ $t("signup.step1.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("signup.step1.explain") }}
          </p>

          <v-form
            ref="form"
            v-model="validSteps[`step${step}`]"
            autocomplete="off"
            lazy-validation
          >
            <v-avatar
              color="grey"
              size="100"
              @mouseenter="over = true"
              @mouseleave="over = false"
              @click="$refs.inputUpload.click()"
            >
              <v-icon v-show="!over && !avatar">
                mdi-account
              </v-icon>
              <v-icon v-show="over && !avatar">
                mdi-file-image
              </v-icon>
              <img v-show="avatar" alt="avatar" :src="avatar" />
            </v-avatar>

            <input
              v-show="false"
              id="inputUpload"
              ref="inputUpload"
              type="file"
              accept="image/*"
              @change="uploadFile"
            />

            <v-text-field
              id="name"
              v-model="name"
              :rules="nameRules"
              :label="$t('signup.step1.form.name.label')"
              required
            />
          </v-form>
        </v-stepper-content>

        <v-stepper-content v-scroll="scrollEvent" step="2">
          <h1>{{ $t("signup.step2.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("signup.step2.explain") }}
          </p>
          <article v-html="$t('cgv')"></article>
        </v-stepper-content>

        <v-stepper-content step="3">
          <h1>{{ $t("signup.step3.h1") }}</h1>

          <p class="subtitle-1">
            {{ $t("signup.step3.explain") }}
          </p>
          <v-form
            ref="form"
            v-model="validSteps[`step${step}`]"
            autocomplete="off"
            lazy-validation
          >
            <v-text-field
              id="email"
              v-model="email"
              type="email"
              :rules="emailRules"
              :label="$t('signup.step3.form.email.label')"
              required
            />

            <v-text-field
              id="password"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="passwordRules"
              :label="$t('signup.step3.form.password.label')"
              required
              @click:append="show = !show"
            />
          </v-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-card-text class="footer">
      <notify :snackbar="snackbar" :text="message" />
      <v-btn
        id="next"
        :disabled="!validSteps[`step${step}`]"
        absolute
        fab
        top
        right
        @click="step++"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-text>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex"
import Notify from "../../components/Notify"
import { EmailAlreadyUserException } from "../../exceptions/EmailAlreadyUserException"

export default {
  name: "Signup",
  components: {
    notify: Notify,
  },
  data: () => ({
    show: false,
    snackbar: false,
    message: "",

    step: 1,
    scrolled: false,
    over: false,

    validSteps: {
      step1: true,
      step2: true,
      step3: true,
    },

    name: "",
    nameRules: [],

    email: "",
    emailRules: [],

    password: "",
    passwordRules: [],
    avatar: "",
  }),
  watch: {
    validSteps: {
      handler() {
        if (this.step === 1) {
          this.validSteps["step1"] = this.avatar !== "" && this.name !== ""
        }

        if (this.step === 3) {
          this.validSteps["step3"] = this.email !== "" && this.password !== ""
        }
      },
      deep: true,
    },
    async step() {
      if (this.step > 3) {
        this.step = 3
        try {
          await this.signup({
            email: this.email,
            password: this.password,
            avatar: this.avatar,
            name: this.name,
          })

          await this.$router.replace({ path: "/" })
        } catch (e) {
          if (e instanceof EmailAlreadyUserException) {
            this.snackbar = true
            this.message = this.$t("signup.error.registrationFailed")
          }
        }
      }
    },
  },
  mounted() {
    let i = 0
    while (i < 3) {
      i++
      this.validSteps[`step${i}`] = !this.validSteps[`step${i}`]
    }

    this.emailRules = [
      (v) => !!v || this.$t("signup.step3.form.email.validation.require"),
      (v) =>
        /.+@.+\..+/.test(v) ||
        this.$t("signup.step3.form.email.validation.valid"),
    ]

    this.nameRules = [
      (v) => !!v || this.$t("signup.step1.form.name.validation.require"),
    ]

    this.passwordRules = [
      (v) => !!v || this.$t("signup.step3.form.password.validation.require"),
      (v) =>
        v.length >= 6 ||
        this.$t("signup.step3.form.password.validation.secured"),
    ]
  },
  methods: {
    ...mapActions({
      signup: "user/signup",
    }),
    uploadFile(data) {
      const localImage = new FileReader()

      localImage.addEventListener("load", (e) => {
        this.avatar = e.target.result
        this.validSteps[`step${this.step}`] =
          this.avatar !== "" && this.name !== ""
      })

      if (data.target.files.length) {
        localImage.readAsDataURL(data.target.files[0])
      }
    },
    scrollEvent() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.validSteps[`step${this.step}`] = true
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.v-stepper
  margin-bottom: 80px

.footer
  background-color: #FFF
  height: 70px
  position: fixed
  bottom: 0
  left: 0
</style>
