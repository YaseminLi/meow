<template>
  <div class="editEvent">
    <Title @back="back" :title="title"/>
    <div class="content">
      <ul>
        <li class="item">
          <div class="tag">提醒类型</div>
          <span>
            <span>驱虫</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">备注</div>
          <span>
            <span>用博莱恩</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">重复</div>
          <span>
            <span>每天</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">开始日期</div>
          <span>
            <span>2020-03-20</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">提醒时间</div>
          <span>
            <span>20:00</span>
            <i class="iconfont next"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Title from "components/Title.vue";
export default {
     data(){
        return{
            title:"编辑提醒"
        }
    },
  components: {
    Title
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.editEvent
  background: white
  position: fixed
  top: 0
  width: 100%
  bottom: 0
  overflow: hidden
  z-index: 20
  .content
    .iconfont
      font-size: $fontsize-small
      padding-left: 10px
    .space
        text-align-last: justify;
        width 56px
    .item
      padding: 12px 20px
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom: 1px $border-grey solid
  </style>