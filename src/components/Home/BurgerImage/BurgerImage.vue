<template>
  <div class="image">
    <img alt="" class="image__img" src="@/assets/burger.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BurgerImageComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.image {
  &__img {
    width: 500px;
  }
}
</style>
