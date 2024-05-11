<template>
  <div class="about">
    <Welcome />
    <Description />
    <Approach />
    <Location />
    <Contact />
    <Lure />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Welcome from "@/components/About/Welcome/Welcome.vue";
import Description from "@/components/About/Description/Description.vue";
import Approach from "@/components/About/Approach/Approach.vue";
import Location from "@/components/About/Location/Location.vue";
import Contact from "@/components/About/Contact/Contact.vue";
import Lure from "@/components/About/Lure/Lure.vue";

export default defineComponent({
  name: "AboutComponent",
  setup() {
    return {};
  },
  components: {
    Welcome,
    Description,
    Approach,
    Location,
    Contact,
    Lure
  }
});
</script>

<style lang="scss" scoped>
.about {
  padding: 0 200px;
}
</style>
