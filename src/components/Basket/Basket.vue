<template>
  <div class="basket">
    <div v-if="isEmpty">
      <Empty />
    </div>
    <div v-if="!isEmpty">
      <Heading />
      <div v-for="order in orders" :key="order.product_id" class="basket__orders">
        <Order :order="order" />
      </div>
      <Total />
      <Action />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Empty from "@/components/Basket/Empty/Empty.vue";
import Heading from "@/components/Basket/Heading/Heading.vue";
import Order from "@/components/Basket/Order/Order.vue";
import Total from "@/components/Basket/Total/Total.vue";
import Action from "@/components/Basket/Action/Action.vue";

export type OrdersType = {
  product_id: number;
  name: string;
  image: string;
  count: number;
  price: number;
};

export default defineComponent({
  name: "BasketComponent",
  setup() {
    const isEmpty = ref<boolean>(false);
    const orders = ref<OrdersType[]>([
      {
        product_id: 1,
        name: "New In the Club",
        image: "new-in-club.png",
        count: 2,
        price: 3
      },
      {
        product_id: 2,
        name: "Burger",
        image: "burger.png",
        count: 10,
        price: 2
      }
    ]);

    return {
      //   ref
      isEmpty,
      orders
    };
  },
  components: {
    Empty,
    Heading,
    Order,
    Total,
    Action
  }
});
</script>

<style lang="scss" scoped>
.basket {
  padding: 0 200px;

  &__orders {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
}
</style>
