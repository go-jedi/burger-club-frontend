<template>
  <div class="order">
    <OrderImage :image="order.image" />
    <Name :name="order.name" />
    <Count :count="order.count" />
    <Price :price="order.price" />
    <Delete :product_id="order.product_id" />
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

import type { OrdersType } from "@/components/Basket/Basket.vue";

import OrderImage from "@/components/Basket/Order/OrderImage/OrderImage.vue";
import Name from "@/components/Basket/Order/Name/Name.vue";
import Count from "@/components/Basket/Order/Count/Count.vue";
import Price from "@/components/Basket/Order/Price/Price.vue";
import Delete from "@/components/Basket/Order/Delete/Delete.vue";

export default defineComponent({
  name: "OrderComponent",
  props: {
    order: {
      type: Object as PropType<OrdersType>,
      required: true
    }
  },
  setup() {
    return {};
  },
  components: {
    OrderImage,
    Name,
    Count,
    Price,
    Delete
  }
});
</script>

<style lang="scss" scoped>
.order {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  align-items: center;
  padding: 5px 10px;
  background-color: #1548369d;
  border-radius: 10px;
}
</style>
