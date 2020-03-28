<template>
  <div id="app">
    <div id="nav">
      <router-view />
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="changeRouter"></cube-tab-bar>
    </div>
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
          icon: "cubeic-home"
        },
        {
          label: "Stock",
          icon: "cubeic-like"
        }
      ]
    };
  },
  methods: {
    changeRouter() {
      console.log("a");
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
