<template>
  <div class="name">
    <div class="name__title">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NameComponent",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.name {
  &__title {
    font-size: 22px;
    font-weight: 700;
  }
}
</style>
