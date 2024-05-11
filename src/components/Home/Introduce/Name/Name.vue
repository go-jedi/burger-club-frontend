<template>
  <div class="name">
    <div class="name__text">Burger Club</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.name {
  &__text {
    font-size: 85px;
    font-style: italic;
    font-weight: 700;
  }
}
</style>
