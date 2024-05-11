<template>
  <div class="location">
    <div class="location__text">
      📍 We are located in the city center, next to the main park. Come visit us to feel the
      atmosphere of warmth and comfort, and also enjoy the best burgers in the city!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LocationComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.location {
  margin-top: 30px;

  &__text {
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
