<template>
  <div class="home">
    <Introduce />
    <BurgerImage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Introduce from "@/components/Home/Introduce/Introduce.vue";
import BurgerImage from "@/components/Home/BurgerImage/BurgerImage.vue";

export default defineComponent({
  name: "HomeComponent",
  setup() {
    return {};
  },
  components: {
    Introduce,
    BurgerImage
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
