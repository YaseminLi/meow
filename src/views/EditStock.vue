<template>
  <div class="editStock position-fixed">
    <Title @back="back" :title="title" />
    <div class="content">
      <ul>
        <li class="item border-bottom-1px">
          <div class="tag space">类型</div>
          <span @click="showPicker(typePickerDate,typePickerTitle)">
            <span>主粮</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag space">名称</div>
          <span @click="showPrompt(nameTitle)">
            <span>巅峰猫粮</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag space">份量</div>
          <span @click="showPrompt(fenliangTitle)">
            <span>5kg</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag space">数量</div>
          <span @click="showPrompt(countTitle)">
            <span>3</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">购买途径</div>
          <span @click="showPrompt(buyWhereTitle)">
            <span>淘宝</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">购买日期</div>
          <span @click="showDatePicker(buyDateTitle)">
            <span>2020-03-20</span>
            <i class="iconfont next"></i>
          </span>
        </li>

        <li class="item border-bottom-1px">
          <div class="tag">有效日期</div>
          <span @click="showDatePicker(valiableDateTitle)">
            <span>2021-09-29</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">是否开封</div>
            <cube-switch v-model="open"></cube-switch>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">是否记账</div>
            <cube-switch v-model="booking"></cube-switch>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Title from "components/Title.vue";
import {
  timePickerMixin,
  datePickerMixin,
  propmtMixin,
  pickerMixin
} from "common/js/mixin.js";
export default {
  data() {
    return {
      title: "编辑库存",
      typePickerDate: [{ text: "主粮", value: "主粮" }],
      typePickerTitle: "选择类型",
      nameTitle: "请输入名称",
      fenliangTitle: "请输入份量",
      buyDateTitle: "选择购买日期",
      buyWhereTitle: "请输入购买途径",
      valiableDateTitle: "选择有效日期",
      countTitle: "请输入数量",
      booking:false,
      open:true
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
  mixins: [timePickerMixin, datePickerMixin, propmtMixin, pickerMixin]
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.editStock
  position-fixed(20)
  .content
    .iconfont
      font-size: $fontsize-small
      padding-left: 10px
    .space
      text-align-last: justify
      width: 56px
    .item
      padding: 12px 0
      margin: 0 20px
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom-1px($border-grey) 
</style>