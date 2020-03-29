<template>
  <div class="record">
    <Introduce />
    <Remind />
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
  height 100%
  background $background-grey
</style>
