<template>
  <div class="editEvent position-fixed">
    <Title @back="back" :title="title" />
    <div class="content">
      <ul>
        <li class="item border-bottom-1px">
          <div class="tag">提醒类型</div>
          <span @click="setRemindType">
            <span>驱虫</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag space">备注</div>
          <span @click="showPrompt(note)">
            <span>用博莱恩</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag space">提醒频率</div>
          <span @click="setRate">
            <span>每天</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">开始日期</div>
          <span @click="showDatePicker(datePickerTitle)">
            <span>2020-03-20</span>
            <i class="iconfont next"></i>
          </span>
        </li>
        <li class="item border-bottom-1px">
          <div class="tag">提醒时间</div>
          <span @click="showTimePicker(timePickerTitle)">
            <span>20:00</span>
            <i class="iconfont next"></i>
          </span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Title from "components/Title.vue";
import {
  timePickerMixin,
  datePickerMixin,
  propmtMixin
} from "common/js/mixin.js";
export default {
  data() {
    return {
      title: "编辑提醒",
      timePickerTitle: "选择时间",
      datePickerTitle: "选择日期",
      note:"添加提醒备注"
    };
  },
  components: {
    Title
  },
  methods: {
    back() {
      this.$router.push('/record');
    },
    setRate(){
      this.$router.push('/record/editEvent/setRate')
    },
    setRemindType(){
      this.$router.push('/record/editEvent/setRemindType')
    }
  },
  mixins: [timePickerMixin, datePickerMixin, propmtMixin]
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import "~common/stylus/mixin.styl"
.editEvent
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
      margin 0 20px
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom-1px($border-grey )
</style>