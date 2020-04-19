<template>
  <v-alert
    v-model="show"
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
        data: () => ({
            show: true
        })
    }
</script>
