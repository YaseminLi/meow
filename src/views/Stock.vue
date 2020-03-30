<template>
  <div class="stock">
    <div class="title">
      <span>按类别</span>
      <i class="iconfont xiala"></i>
    </div>
    <TabBar @editStock="editStock"/>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from 'components/TabBar'
export default {
  components:{
    TabBar
  },
  methods:{
    editStock(){
      this.$router.push('/stock/editStock')
    }
  }
}
</script>
<style lang="stylus" scoped>
.stock
  .title
    height 45px
    font-size $fontsize-large-x
    display flex
    justify-content center
    align-items center
    position relative
    i
      position absolute
      left 60%
</style>
