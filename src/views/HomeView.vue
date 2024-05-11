<template>
  <div>
    <Home />
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Home from "@/components/Home/Home.vue";
import Cards from "@/components/Cards/Cards.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    return {};
  },
  components: {
    Home,
    Cards
  }
});
</script>

<style lang="scss" scoped></style>
