<template>
  <div class="introduce">
    <div class="top">
      <img class="avatar" src="../common/img/avatar.png" />
      <div class="message-container">
        <div class="message">
          <div class="nameMale">
            <span class="name">汤圆</span>
            <i class="iconfont female"></i>
          </div>
          <div class="kind">英短银渐</div>
        </div>
        <span class="toEdit" @click="editMessage()"><i class="iconfont next" ></i></span>
      </div>
    </div>
    <div class="bottom">
      <div class="weight item">
        <span>2kg</span>
        <span>体重</span>
      </div>
      <div class="together item">
        <span>289天</span>
        <span>一起生活</span>
      </div>
      <div class="birth item">
        <span>9个月</span>
        <span>诞生</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    editMessage() {
      console.log('aa');
      
      // 向父组件传递点击事件
      this.$emit("editMessage");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.introduce
  background: #FFCD70
  width: 100%
  height: 225px
  box-sizing: border-box
  padding: 40px 20px
  .top
    display: flex
    height: 100px
    .avatar
      width: 90px
      height: 90px
      border-radius: 50%
      margin-right: 20px
    .message-container
      display flex
      flex 1
      margin-right 30px
      justify-content space-between
      align-items center
      .message
        height 100%
        display: flex
        flex-direction: column
        justify-content: center
        padding: 15px 0
        .nameMale
          display: flex
          align-items: center
          margin-bottom 10px
          .name
            font-size: $fontsize-large-xxxx
          .iconfont
            font-size: $fontsize-large
            margin-left: 10px
        .kind
          font-size: $fontsize-medium
          text-align: left
      .toEdit
        position: relative
        &:before
          content: ''
          position: absolute
          top: -20px
          left: -20px
          right: -20px
          bottom: -20px
  .bottom
    display: flex
    justify-content: space-around
    margin-top: 5px
    .item
      display: flex
      flex-direction: column
      span
        line-height: 24px
</style>