<template>
  <div class="count">
    <button class="count__btn">-</button>
    <div class="count__text">{{ count }}</div>
    <button class="count__btn">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountComponent",
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.count {
  display: flex;
  align-items: center;
  justify-content: center;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 24px;
    border: 1px solid #fe5f1e;
    color: #fe5f1e;

    &:hover {
      background-color: #fffc;
    }
  }

  &__text {
    margin: 0 12px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
