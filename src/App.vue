<template>
  <div id="app">
    <router-view></router-view>
    <TabBar class="tabBar" />
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
export default {
  components: {
    TabBar
  }
};
</script>

<style lang="stylus">
#app
  text-align: center
  color: #2c3e50
  .tabBar
    position: fixed
    bottom: 0
    width: 100%
    height: 50px
</style>
