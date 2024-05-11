<template>
  <div class="count">
    <div class="count__title">Total goods:</div>
    <div class="count__text">3 pcs.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.count {
  display: flex;
  align-items: center;

  &__title {
    font-size: 25px;
  }

  &__text {
    margin-left: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #e79600;
  }
}
</style>
