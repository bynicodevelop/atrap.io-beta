<template>
  <v-flex class="mt-10">
    <v-stepper v-model="step">
      <v-stepper-items>
        <v-stepper-content step="1">
          <h1>{{ $t("signup.h1") }}</h1>

          <p class="headline">
            {{ $t("signup.explain") }}
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
              <img v-show="avatar" :src="avatar" />
            </v-avatar>

            <input
              v-show="false"
              id="inputUpload"
              ref="inputUpload"
              type="file"
              @change="uploadFile"
            />

            <v-text-field
              id="name"
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            />
          </v-form>
        </v-stepper-content>

        <v-stepper-content v-scroll="scrollEvent" step="2">
          <h1>Sign up</h1>
          <p class="headline">
            Explication
          </p>
          <article v-html="$t('cgv')" />
        </v-stepper-content>

        <v-stepper-content step="3">
          <h1>{{ $t("signup") }}</h1>
          <p class="headline">
            Explication
          </p>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-card-text class="footer">
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
export default {
  name: "Signup",
  data: () => ({
    step: 1,
    scrolled: false,
    over: false,

    validSteps: {
      step1: true,
      step2: true,
    },
    name: "",
    nameRules: [
      (v) => !!v || "Merci de saisir le nom de votre entité (marque)",
    ],
    avatar: "",
  }),
  watch: {
    validSteps: {
      handler() {
        if (this.step === 1) {
          this.validSteps["step1"] = this.avatar !== "" && this.name !== ""
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.validSteps[`step1`] = !this.validSteps[`step1`]
    this.validSteps[`step2`] = !this.validSteps[`step2`]
  },
  methods: {
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
