<template>
  <div class="burger">
    <RouterLink class="burger__logo" to="/">Burger</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.burger {
  &__logo {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }
}
</style>
