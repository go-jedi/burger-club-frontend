<template>
  <div class="banner">
    <Logo />
    <Navigate />
    <Close />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Logo from "@/components/Banner/Logo/Logo.vue";
import Navigate from "@/components/Banner/Navigate/Navigate.vue";
import Close from "@/components/Banner/Close/Close.vue";

export default defineComponent({
  name: "BannerComponent",
  setup() {
    return {};
  },
  components: {
    Logo,
    Navigate,
    Close
  }
});
</script>

<style lang="scss" scoped>
.banner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
