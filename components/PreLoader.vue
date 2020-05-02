<template lang="html">
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "PreLoading",
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  z-index: 1000;
}
</style>
