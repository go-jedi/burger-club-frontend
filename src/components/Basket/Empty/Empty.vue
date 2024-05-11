<template>
  <div class="empty">
    <div class="empty__title">Cart is empty 😕</div>
    <SubTitle />
    <EmptyImage />
    <EmptyButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SubTitle from "@/components/Basket/Empty/SubTitle/SubTitle.vue";
import EmptyImage from "@/components/Basket/Empty/EmptyImage/EmptyImage.vue";
import EmptyButton from "@/components/Basket/Empty/EmptyButton/EmptyButton.vue";

export default defineComponent({
  name: "EmptyComponent",
  setup() {
    return {};
  },
  components: {
    SubTitle,
    EmptyImage,
    EmptyButton
  }
});
</script>

<style lang="scss" scoped>
.empty {
  &__title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
