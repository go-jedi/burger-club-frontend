<template>
  <div class="action">
    <Back />
    <Payment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Back from "@/components/Basket/Action/Back/Back.vue";
import Payment from "@/components/Basket/Action/Payment/Payment.vue";

export default defineComponent({
  name: "ActionComponent",
  setup() {
    return {};
  },
  components: {
    Back,
    Payment
  }
});
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
</style>
