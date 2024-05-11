<template>
  <div class="approach">
    <div class="approach__title">🔥 Our approach to burgers:</div>
    <ul class="approach__list">
      <li v-for="approach in approaches" :key="approach.id" class="approach__item">
        {{ approach.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type ApproachType = {
  id: number;
  text: string;
};

export default defineComponent({
  name: "ApproachComponent",
  setup() {
    const approaches = ref<ApproachType[]>([
      {
        id: 1,
        text: "Fresh: We use only the freshest ingredients so that every byte is full of flavor."
      },
      {
        id: 2,
        text: "Unique recipes: We create new dishes every month to always surprise you with new tastes."
      },
      {
        id: 3,
        text: "Fast Service: We value your time, which is why we guarantee fast and friendly service."
      }
    ]);

    return {
      //   ref
      approaches
    };
  }
});
</script>

<style lang="scss" scoped>
.approach {
  margin-top: 40px;

  &__title {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
  }

  &__list {
    margin-top: 10px;
  }

  &__item {
    list-style-type: circle;
    font-size: 17px;

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
