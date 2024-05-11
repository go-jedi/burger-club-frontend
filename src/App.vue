<template>
  <div class="app">
    <Banner />
    <div class="app__content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import Banner from "@/components/Banner/Banner.vue";

export default defineComponent({
  name: "App",
  setup: function () {
    console.log("window.telegram", window.TelegramGameProxy);

    return {};
  },
  components: {
    RouterView,
    Banner
  }
});
</script>

<style lang="scss" scoped>
.app {
  padding: 45px 40px;

  &__content {
    margin-top: 50px;
  }
}
</style>
