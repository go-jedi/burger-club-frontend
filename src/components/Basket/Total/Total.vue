<template>
  <div class="total">
    <Count />
    <Sum />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Count from "@/components/Basket/Total/Count/Count.vue";
import Sum from "@/components/Basket/Total/Sum/Sum.vue";

export default defineComponent({
  name: "TotalComponent",
  setup() {
    return {};
  },
  components: {
    Count,
    Sum
  }
});
</script>

<style lang="scss" scoped>
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
</style>
