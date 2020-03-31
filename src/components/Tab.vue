<template>
  <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="changeRouter"></cube-tab-bar>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "记录",
      tabs: [
        {
          label: "记录",
          icon: "iconfont animal",
          value: "record"
        },
        {
          label: "库存",
          icon: "iconfont kucun",
          value: "stock"
        }
      ]
    };
  },
  methods: {
    changeRouter(value) {
      this.$router.push(`/${value}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
  .cube-tab-bar
    font-size 14px
    background  $color-white
    >>>.cube-tab div
      margin-top 4px
</style>