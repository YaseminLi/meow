<template>
  <div class="record scroll-list-wrap">
    <!-- 滚动列表 -->
    <cube-scroll>
      <Introduce @editIntroduce="editIntroduce"/>
      <div class="remindContainer">
        <Remind @editEvent="editEvent" />
        <Remind />
        <Remind />
        <Remind />
      </div>
    </cube-scroll>
    <router-view ></router-view>
  </div>
</template>

<script>
import Introduce from "components/Introduce";
import Remind from "components/Remind";

export default {
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
