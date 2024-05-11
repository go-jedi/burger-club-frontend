<template>
  <div class="price">
    <div class="price__text">{{ price.toFixed(2) }} $</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PriceComponent",
  props: {
    price: {
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
.price {
  display: flex;
  justify-content: center;

  &__text {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
