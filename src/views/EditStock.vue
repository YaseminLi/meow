<template>
  <div class="editEvent">
    <Title @back="back" :title="title"/>
    <div class="content">
      <ul>
        <li class="item">
          <div class="tag space">类型</div>
          <span>
            <span>主粮</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">名称</div>
          <span>
            <span>巅峰猫粮</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">份量</div>
          <span>
            <span>5kg</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">购买日期</div>
          <span>
            <span>2020-03-20</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">购买途径</div>
          <span>
            <span>淘宝</span>
            <i class="iconfont next"></i>
          </span>
        </li>
          <li class="item">
          <div class="tag">有效日期</div>
          <span>
            <span>2021-09-29</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">数量</div>
          <span>
            <span>3</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">是否开封</div>
          <span>
            <span>是</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">是否记账</div>
          <span>
            <span>否</span>
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
            title:"编辑库存"
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