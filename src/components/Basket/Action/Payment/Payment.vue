<template>
  <div class="payment">
    <button class="payment__btn">Pay now</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.payment {
  &__btn {
    width: 200px;
    height: 45px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #e79600;
    color: #fff;

    &:hover {
      background-color: rgba(255, 184, 51, 0.968627451);
    }
  }
}
</style>
