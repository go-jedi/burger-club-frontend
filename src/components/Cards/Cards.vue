<template>
  <div class="cards">
    <div v-for="card in cards" :key="card.id" class="cards__item">
      <div class="cards__item">
        <Item :image="card.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Item from "@/components/Cards/Item/Item.vue";

type CardsType = {
  id: number;
  image: string;
};

export default defineComponent({
  name: "CardsComponent",
  setup() {
    const cards = ref<CardsType[]>([
      {
        id: 1,
        image: "burger-two.png"
      },
      {
        id: 2,
        image: "burger-three.png"
      },
      {
        id: 3,
        image: "burger-four.png"
      },
      {
        id: 4,
        image: "burger-five.png"
      }
    ]);

    return {
      // ref
      cards
      //   func
    };
  },
  components: {
    Item
  }
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  align-items: center;
  margin-top: 50px;

  &__item {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
</style>
