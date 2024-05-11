<template>
  <div class="empty-image">
    <img alt="basket-empty" src="@/assets/basket/basket-empty.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyImage",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.empty-image {
  margin-top: 50px;
  text-align: center;
}
</style>
