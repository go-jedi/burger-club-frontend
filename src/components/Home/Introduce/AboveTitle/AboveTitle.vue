<template>
  <div class="above">
    <div class="above__text">The ultimate</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboveTitleComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.above {
  text-align: center;

  &__text {
    margin-top: -10px;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 10px;
    color: #adbc9f;
    text-transform: uppercase;
  }
}
</style>
