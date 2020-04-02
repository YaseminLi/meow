<template>
  <div class="editMessage position-fixed">
    <Title @back="back" :title="title" />
    <div class="content">
      <div class="avatar item">
        <div class="tag space">头像</div>
        <div class="right">
          <!-- <img src="../common/img/avatar.png" /> -->
          <cube-upload
            ref="upload"
            v-model="files"
            :action="action"
            @files-added="addedHandler"
            @file-error="errHandler"
          >
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <i>＋</i>
                </div>
              </cube-upload-btn>
            </div>
          </cube-upload>
        </div>
      </div>
      <ul>
        <li class="item">
          <div class="tag space">宠物性别</div>
          <cube-radio-group v-model="genderSelected" :options="genderOptions" :horizontal="true" :hollow-style="true" />
          <!-- <span @click="showPicker(genderPickerData,genderPickerTitle)">
            <span>MM</span>
            <i class="iconfont next" ></i>
          </span>-->
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
import { pickerMixin, propmtMixin, datePickerMixin } from "common/js/mixin.js";
export default {
  data() {
    return {
      title: "宠物信息",
      genderOptions: ["MM", "GG"],
      genderSelected: "MM",
      namePropmtTitle: "宠物名字",
      weightPropmtTitle: "宠物体重",
      bornPickerData: [
        { text: "已绝育", value: "已绝育" },
        { text: "暂未绝育", value: "暂未绝育" },
        { text: "计划繁育", value: "计划繁育" }
      ],
      bornPickerTitle: "是否绝育",
      birthDatePickerTitle: "出生日期",
      homeDatePickerTitle: "出生日期",
      kindPropmtTitle: "品种",
      leixingPromtTitle: "宠物类型",
      action: "//jsonplaceholder.typicode.com/photos/",
      files: []
    };
  },
  components: {
    Title
  },
  methods: {
    back() {
      this.$router.back();
    },
    addedHandler() {
      const file = this.files[0]
      file && this.$refs.upload.removeFile(file)
    },
    errHandler() {
      // const msg = file.response.message
      this.$createToast({
        type: 'warn',
        txt: 'Upload fail',
        time: 1000
      }).show()
    }
  },
  mixins: [pickerMixin, propmtMixin, datePickerMixin]
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.editMessage
  position-fixed(20)
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
      .cube-upload
        width 60px
        height 60px
        border-radius 50%
        .cube-upload-file, .cube-upload-btn
          margin: 0
          height: 60px
        .cube-upload-file
          margin: 0
          + .cube-upload-btn
            margin-top: -60px
            opacity: 0
          >>>.cube-upload-file-def
            width: 60px
            height: 60px
            border-radius 50%
            >>>.cubeic-wrong
              display: none
            .cube-upload-file-state
              border-radius 50%
        .cube-upload-btn
          display: flex
          align-items: center
          justify-content: center
          i
            display: inline-flex
            align-items: center
            justify-content: center
            width: 40px
            height: 40px
            font-size: 32px
            line-height: 1
            font-style: normal
            color: $color-yellow
            background-color: $background-grey
            border-radius: 50%
    .cube-radio-group
      width 100px
      >>>.cube-radio
        padding 0
      >>>.cube-radio-wrap
        padding 0
</style>
