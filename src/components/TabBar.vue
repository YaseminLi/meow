<template>
  <div class="tabBar">
    <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" border-bottom-1px border-top-1px></cube-tab-bar>
    <cube-tab-panels v-model="selectedLabelDefault">
      <cube-tab-panel v-for="(item) in tabs" :label="item.label" :key="item.label" class="scroll-list-wrap">
          <cube-scroll>
          <li class="tab-panel-li" ><Goods @editStock="editStock"/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          <li class="tab-panel-li" ><Goods/></li>
          </cube-scroll>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>
<script>
import Goods from 'components/Goods.vue'
export default {
  data() {
    return {
      selectedLabelDefault: "全部",
      tabs: [
        {
          label: "全部"
        },
        {
          label: "主粮"
        },
        {
          label: "罐头"
        },
        {
          label: "零食"
        },
        {
          label: "其他"
        }
      ]
    };
  },
  components:{
      Goods
  },
  methods:{
        editStock(){
            this.$emit('editStock')
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.cube-tab-bar
  height 38px
  background $color-yellow
  border-bottom-1px($border-grey)
  border-top-1px($border-grey)
  >>>.cube-tab_active
    color $color-black
    background $color-white
  >>>.cube-tab
   padding 0
   height 100%
   line-height 38px
.cube-tab-panels
  background $color-white
  .cube-tab-panel
    height 535px
  .goods
    padding 12px 0
    margin 0 20px
</style>