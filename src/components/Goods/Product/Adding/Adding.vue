<template>
  <div class="adding">
    <div>
      <button class="adding__add">
        Add
        <div class="adding__price">
          <div>{{ product.price.toFixed(2) }}</div>
          <img alt="money" class="adding__img" src="@/assets/menu/money.png" />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

import type { GoodsType } from "@/stores/product";

export default defineComponent({
  name: "AddingComponent",
  props: {
    product: {
      type: Object as PropType<GoodsType>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.adding {
  margin-top: 5px;

  &__add {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #e79600;
    font-size: 15px;
    font-weight: 700;
    color: #fff;

    &:hover {
      background-color: #ffb833f7;
    }
  }

  &__price {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    display: flex;
    align-items: center;
  }

  &__img {
    margin-left: 5px;
    width: 20px;
  }
}
</style>
