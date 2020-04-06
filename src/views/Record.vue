<template>
  <div class="record scroll-list-wrap">
    <!-- 滚动列表 -->
    <cube-scroll>
      <Introduce @editIntroduce="editIntroduce" :introduce="introduce"/>
      <div class="remindContainer">
        <Remind @editEvent="editEvent" />
        <Remind />
        <Remind />
        <Remind />
      </div>
    </cube-scroll>
    <router-view :introduce="introduce"></router-view>
  </div>
</template>

<script>
import Introduce from "components/Introduce";
import Remind from "components/Remind";
import { introduce } from "common/data/introduce.js";

export default {
  data() {
    return {
      introduce: introduce
    };
  },
  components: {
    Introduce,
    Remind
  },
  methods: {
    editIntroduce() {
      this.$router.push("/record/editIntroduce");
    },
    editEvent() {
      this.$router.push("/record/editEvent");
    }
  }
};
</script>
<style lang="stylus" scoped>
.record
  height: 100%
  background: $background-grey
  .remindContainer
    display: flex
    flex-direction: column
    margin-top: -10px
    margin-bottom: 50px
</style>
