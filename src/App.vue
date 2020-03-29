<template>
  <div id="app">
      <router-view />
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="changeRouter"></cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "Record",
      tabs: [
        {
          label: "Record",
          icon: "cubeic-home",
          value: "record"
        },
        {
          label: "Stock",
          icon: "cubeic-like",
          value: "stock"
        }
      ]
    };
  },
  methods: {
    changeRouter(value) {
      this.$router.push(`/${value}`)
    }
  }
};
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
