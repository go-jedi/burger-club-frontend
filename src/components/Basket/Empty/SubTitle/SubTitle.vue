<template>
  <div class="subtitle">
    <div class="subtitle__text">
      Most likely, you did not place an order. To place an order, go to the menu.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubTitleComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.subtitle {
  margin-top: 20px;

  &__text {
    font-size: 16px;
    line-height: 23px;
    text-align: center;
  }
}
</style>
