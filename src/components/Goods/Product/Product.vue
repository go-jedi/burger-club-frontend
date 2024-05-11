<template>
  <div>
    <div class="product">
      <div class="product__count">1</div>
      <div class="product__image">
        <img :src="getImgByUrl(product.image)" alt="card-image" />
      </div>
      <div class="product__title">{{ product.name }}</div>
    </div>
    <Adding />
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

import type { GoodsType } from "@/stores/product";

import Adding from "@/components/Goods/Product/Adding/Adding.vue";

export default defineComponent({
  name: "ProductComponent",
  props: {
    product: {
      type: Object as PropType<GoodsType>,
      required: true
    }
  },
  setup() {
    const getImgByUrl = (img: string) => {
      try {
        const path: string = `../../../assets/menu/${img}`;

        return new URL(path, import.meta.url).href;
      } catch (error) {
        console.log("error in getImgByUrl:", img);
      }
    };

    return {
      getImgByUrl
    };
  },
  components: {
    Adding
  }
});
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 250px;
  padding: 20px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
  }

  &__count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    left: 10px;
    top: 10px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 50%;
    background-color: #e79600;
  }

  &__title {
    margin-top: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
  }
}
</style>
