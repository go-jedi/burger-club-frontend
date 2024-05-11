<template>
  <div>
    <Goods />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Goods from "@/components/Goods/Goods.vue";

export default defineComponent({
  name: "MenuView",
  setup() {
    return {};
  },
  components: {
    Goods
  }
});
</script>

<style lang="scss" scoped></style>
