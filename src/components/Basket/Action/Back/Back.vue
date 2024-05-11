<template>
  <div class="back">
    <RouterLink to="/">
      <button class="back__btn">Back</button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.back {
  &__btn {
    width: 200px;
    height: 45px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #ffffffc9;

    &:hover {
      background-color: #fff;
    }
  }
}
</style>
