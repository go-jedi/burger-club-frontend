<template>
  <div class="welcome">
    <div class="welcome__text">🍔 Burger "Hot Bit" 🌶️</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.welcome {
  &__text {
    font-size: 40px;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }
}
</style>
