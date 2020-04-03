<template>
  <!-- 提醒事件组件 -->
  <div class="remind"  @click="editEvent">
    <div class="icon">
      <i class="iconfont quchong"></i>
      <span>驱虫</span>
    </div>
    <div class="container">
      <div class="item">
        <div class="date">03月28日 18:40</div>
        <div class="clock">
          <i class="iconfont time"></i>
          <span class="days">8天后</span>
        </div>
      </div>
      <div class="item">
        <div class="name">汤圆</div>
        <div class="rate">14天一次</div>
      </div>
    </div>
    <i class="iconfont next"></i>
  </div>
</template>
<script>
export default {
  methods:{
    editEvent(){
      this.$emit('editEvent')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.remind
  width: 92%
  background: $color-white
  margin: 0 auto 16px auto
  border-radius: 5px
  padding: 10px 20px
  display: flex
  box-sizing: border-box
  position: relative
  box-shadow: 0px 0px 5px #B3B3B3
  .icon
    width: 65px
    height: 65px
    background: $color-yellow
    border-radius: 50%
    display: flex
    flex-direction: column
    justify-content: center
    .iconfont
      font-size: 36px
  .container
    flex: 1
    padding 0 20px
    display: flex
    flex-direction column
    justify-content space-evenly
    .item
      display: flex
      justify-content: space-between
      .clock
        height 24px
        display flex
        align-items center
        .time
            font-size: $fontsize-large-xxx
            padding-right: 5px
      .days,.date
        line-height 24px
  .next
    position: absolute
    margin-top: -8px
    top: 50%
    right: 10px
</style>