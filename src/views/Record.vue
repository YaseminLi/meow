<template>
  <div class="record">
    <Introduce />
  </div>
</template>

<script>
import Introduce from "components/Introduce";
export default {
  components: {
    Introduce
  }
};
</script>
<style lang="stylus" scoped>
.record
  height 100%
  background $background-grey
</style>
