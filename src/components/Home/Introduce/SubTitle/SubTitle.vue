<template>
  <div class="subtitle">
    <div class="subtitle__text">Savor the Flavor, Join the Club!</div>
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
  &__text {
    margin-top: 8px;
    font-size: 17px;
    letter-spacing: 3px;
    color: #adbc9f;
    text-align: center;
  }
}
</style>
