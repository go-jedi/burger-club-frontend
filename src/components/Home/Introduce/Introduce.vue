<template>
  <div>
    <AboveTitle />
    <Name />
    <SubTitle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AboveTitle from "@/components/Home/Introduce/AboveTitle/AboveTitle.vue";
import Name from "@/components/Home/Introduce/Name/Name.vue";
import SubTitle from "@/components/Home/Introduce/SubTitle/SubTitle.vue";

export default defineComponent({
  name: "IntroduceComponent",
  setup() {
    return {};
  },
  components: {
    AboveTitle,
    Name,
    SubTitle
  }
});
</script>

<style lang="scss" scoped></style>
