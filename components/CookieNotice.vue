<template>
  <v-alert
    v-model="cookies"
    color="blue-grey darken-4"
    close-text="Fermer"
    dark
    dismissible
    tile
    class="mb-0"
  >
    <small>Nous utilisons des cookies pour nous permettre de mieux comprendre comment le site est utilisé. En
      continuant à utiliser ce site, vous acceptez cette politique.</small>
  </v-alert>
</template>

<script>
    export default {
        name: "cookies-notify",
        computed: {
            cookies: {
                get() {
                    return this.$cookies.get('cookies') === undefined
                },
                set() {
                    this.$cookies.set('cookies', true, {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 365
                    })
                }
            }
        }
    }
</script>
