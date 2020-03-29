<template>
  <div class="record">
    <Introduce />
    <div class="remindContainer">
      <Remind />
      <Remind />
      <Remind />
      <Remind />
    </div>
  </div>
</template>

<script>
import Introduce from "components/Introduce";
import Remind from "components/Remind";
export default {
  components: {
    Introduce,
    Remind
  }
};
</script>
<style lang="stylus" scoped>
.record
  height: 100%
  background: $background-grey
  .remindContainer
    display flex
    flex-direction column
    margin-top -10px
    margin-bottom 50px
</style>
