<template>
  <div class="tabBar">
    <cube-tab-bar v-model="selectedLabelDefault" :data="tabs"></cube-tab-bar>
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
.cube-tab-bar
  height 38px
  background $color-yellow
  border-bottom 1px $border-grey solid
  border-top 1px $border-grey solid
  >>>.cube-tab_active
    color $color-black
    background $color-white
  >>>.cube-tab
   padding 0
   height 100%
   line-height 38px
.cube-tab-panel
  height 535px
//   margin-bottom 50px
</style>