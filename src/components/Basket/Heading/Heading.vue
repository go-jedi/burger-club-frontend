<template>
  <div class="heading">
    <div class="heading__header">
      <div class="heading__title">
        <img
          alt="shopping-cart"
          class="heading__title_img"
          src="@/assets/basket/shopping-cart.png"
        />
        <div>Basket</div>
      </div>
      <button class="heading__btn">
        <img alt="trash" class="heading__btn_img" src="@/assets/basket/trash.svg" />
        Empty trash
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeadingComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 50px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 700;

    &_img {
      margin-right: 10px;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    font-size: 16px;
    font-weight: 700;
    color: #b6b6b6;

    &:hover {
      color: #fff;
    }

    &_img {
      margin-right: 10px;
    }
  }
}
</style>
