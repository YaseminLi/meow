<template>
  <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="changeRouter" border-top-1px></cube-tab-bar>
</template>

<script>
export default {
  data() {
    return {
      // 选中的是value的值，不是label= =
      selectedLabelDefault: "record",
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
@import '~common/stylus/mixin.styl'
  .cube-tab-bar
    font-size 14px
    background  $color-white
    border-top-1px($border-grey)
    >>>.cube-tab div
      margin-top 4px
</style>