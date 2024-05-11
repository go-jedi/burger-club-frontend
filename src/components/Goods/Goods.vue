<template>
  <div class="goods">
    <div class="goods__title">Menu</div>
    <div class="goods__content">
      <div v-for="product in goods" :key="product.id" class="goods__products">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import type { GoodsType } from "@/stores/product";
import { useProductStore } from "@/stores/product";

import Product from "@/components/Goods/Product/Product.vue";

export default defineComponent({
  name: "MenuComponent",
  setup() {
    const productStore = useProductStore();

    const goods = ref<GoodsType[]>(productStore.goods);

    return {
      //   ref
      goods
    };
  },
  components: {
    Product
  }
});
</script>

<style lang="scss" scoped>
.goods {
  &__title {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 30px;
    padding: 0 120px;
    grid-gap: 20px;
  }

  &__products {
    display: flex;
    justify-content: center;
  }
}
</style>
