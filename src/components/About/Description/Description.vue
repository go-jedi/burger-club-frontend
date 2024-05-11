<template>
  <div class="description">
    <div class="description__text">
      Welcome to our cozy place, where every burger is a story of taste. We are proud to offer you
      the freshest and most delicious ingredients that turn into real culinary masterpieces right
      before your eyes. Our mission is to make every diner happy by giving them an unforgettable
      dining experience.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescriptionComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.description {
  margin-top: 40px;

  &__text {
    font-size: 16px;
    line-height: 23px;
  }
}
</style>
