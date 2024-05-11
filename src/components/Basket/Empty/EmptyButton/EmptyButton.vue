<template>
  <div class="empty-button">
    <RouterLink class="empty-button__link" to="/menu">
      <button class="empty-button__btn">Return to menu</button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyButton",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.empty-button {
  margin-top: 50px;
  text-align: center;

  &__btn {
    cursor: pointer;
    width: 210px;
    height: 46px;
    border-radius: 30px;
    background-color: #fff;
    font-size: 18px;
    font-weight: 500;
    color: #000;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
