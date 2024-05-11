<template>
  <div class="sum">
    <div class="sum__title">Order price:</div>
    <div class="sum__text">30 $</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SumComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.sum {
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
