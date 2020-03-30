<template>
  <div id="app">
    <router-view></router-view>
    <TabBar class="tab" />
  </div>
</template>

<script>
import TabBar from "./components/Tab";
export default {
  components: {
    TabBar
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
#app
  text-align: center
  color: #2c3e50
  height 100%
  background $background-grey
  .tab
    position: fixed
    bottom: 0
    width: 100%
    height: 50px
    z-index 999
</style>
