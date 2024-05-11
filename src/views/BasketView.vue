<template>
  <div>
    <Basket />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Basket from "@/components/Basket/Basket.vue";

export default defineComponent({
  name: "BasketView",
  setup() {
    return {};
  },
  components: {
    Basket
  }
});
</script>

<style lang="scss" scoped></style>
