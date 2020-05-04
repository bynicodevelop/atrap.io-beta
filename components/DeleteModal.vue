<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="error" dark v-on="on">
        {{ button }}
      </v-btn>
    </template>
    <v-card>
      <v-form ref="form" v-model="valid" autocomplete="off" lazy-validation>
        <v-card-title>
          <span class="headline">{{ $t("modal.delete.headline") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <p>{{ $t("modal.delete.content") }}</p>

              <v-col cols="12">
                <v-text-field
                  v-model="confirm"
                  :rules="confirmRules"
                  :label="$t('modal.delete.form.label')"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success darken-1" text @click="dialog = false">
            {{ $t("modal.delete.button.cancel") }}
          </v-btn>
          <v-btn :disabled="!valid" color="red darken-1" text @click="doValid">
            {{ $t("modal.delete.button.valid") }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
/*global $nuxt*/
export default {
  name: "Deletemodale",
  props: {
    button: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    valid: false,
    dialog: false,
    confirm: "",
    confirmRules: [
      (v) => !!v || $nuxt.$t("modal.delete.form.delete.validation.require"),
      (v) =>
        v === "SUPPRIMER" ||
        $nuxt.$t("modal.delete.form.delete.validation.invalid"),
    ],
  }),
  watch: {
    valid() {
      this.valid = this.confirm !== ""
    },
  },
  mounted() {
    this.valid = !this.valid
  },
  methods: {
    doValid() {
      this.$emit("confirm")
      this.dialog = false
    },
  },
}
</script>
