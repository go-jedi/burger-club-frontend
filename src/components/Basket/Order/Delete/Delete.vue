<template>
  <div class="delete">
    <button class="delete__btn" @click="onDelete">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeleteComponent",
  props: {
    product_id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const onDelete = (): void => {
      try {
        console.log("props.product_id", props.product_id);
      } catch (error) {
        console.log("error in onDelete:", error);
      }
    };

    return {
      //   func
      onDelete
    };
  }
});
</script>

<style lang="scss" scoped>
.delete {
  display: flex;
  justify-content: end;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    font-size: 24px;
    border: 1px solid #d7d7d7;
    color: #a3a3a3;
    transform: rotate(-45deg);

    &:hover {
      background-color: #fffc;
    }
  }
}
</style>
