<template>
  <div class="contact">
    <div class="contact__text">
      📞 Contact us: If you have questions or want to know more about our special offers, call us at
      +7 (123) 456-78-90 or email us at info@burgerhouse.com.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 30px;

  &__text {
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
