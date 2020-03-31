<template>
  <div class="editMessage">
    <Title @back="back" :title="title" />
    <div class="content">
      <div class="avatar item">
        <div class="tag space">头像</div>
        <div class="right">
          <img src="../common/img/avatar.png" />
          <i class="iconfont next"></i>
        </div>
      </div>
      <ul>
        <li class="item">
          <div class="tag space" >宠物性别</div>
          <cube-radio-group v-model="genderSelected" :options="genderOptions" :horizontal="true"/>
          <!-- <span @click="showPicker(genderPickerData,genderPickerTitle)">
            <span>MM</span>
            <i class="iconfont next" ></i>
          </span> -->
        </li>
        <li class="item">
          <div class="tag">宠物名字</div>
          <span @click="showPrompt(namePropmtTitle)">
            <span>猪猪</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">宠物类型</div>
          <span @click="showPrompt(leixingPromtTitle)">
            <span>猫咪</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">品种</div>
          <span @click="showPrompt(kindPropmtTitle)">
            <span>银渐</span>
            <i class="iconfont next"></i>
          </span>
        </li>

        <li class="item">
          <div class="tag">出生日期</div>
          <span @click="showDatePicker(birthDatePickerTitle)">
            <span>2019-06-18</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">到家日期</div>
          <span @click="showDatePicker(homeDatePickerTitle)">
            <span>2019-10-18</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag space">宠物体重</div>
          <span @click="showPrompt(weightPropmtTitle)">
            <span>2.7kg</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item">
          <div class="tag">是否绝育</div>
          <span @click="showPicker(bornPickerData,bornPickerTitle)">
            <span>计划绝育</span>
            <i class="iconfont next"></i>
          </span>
        </li>
      </ul>
    </div>
  </div> 
</template>
<script>
import Title from "components/Title.vue";
import { pickerMixin ,propmtMixin,datePickerMixin} from "common/js/mixin.js";
export default {
  data() {
    return {
      title: "宠物信息",
      genderOptions: ["MM","GG"],
      genderSelected:"MM",
      namePropmtTitle:"宠物名字",
      weightPropmtTitle:"宠物体重",
      bornPickerData: [
        { text: "已绝育", value: "已绝育" },
        { text: "暂未绝育", value: "暂未绝育" },
        { text: "计划繁育", value: "计划繁育" }
      ],
       bornPickerTitle:"是否绝育",
       birthDatePickerTitle:"出生日期",
       homeDatePickerTitle:"出生日期",
       kindPropmtTitle:"品种",
       leixingPromtTitle:"宠物类型"
    };
  },
  components: {
    Title
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  mixins: [pickerMixin,propmtMixin,datePickerMixin]
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.editMessage
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
      text-align-last: justify
      width: 56px
    .item
      padding: 12px 20px
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom: 1px $border-grey solid
    .avatar
      .right
        display: flex
        align-items: center
        img
          height: 60px
          width: 60px
          border-radius: 50%
    .cube-radio-group
        display flex
        >>>.cube-radio-wrap
          padding 0
          border-style none!important
</style>
<style lang="stylus">
.cube-radio-group
        border-style none
        >>>.cube-radio-wrap
          padding 0
          // border-bottom 1px transparent solid!important
</style>