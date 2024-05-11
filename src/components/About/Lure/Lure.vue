<template>
  <div class="lure">
    <div class="lure__text">
      We are waiting for you in our “Hot Bit” burger shop, where every burger is a piece of joy!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LureComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.lure {
  margin-top: 30px;

  &__text {
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
