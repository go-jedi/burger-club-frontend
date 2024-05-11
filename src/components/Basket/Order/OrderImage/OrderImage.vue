<template>
  <div class="order-image">
    <img :src="getImgByUrl(image)" alt="order-image" class="order-image__img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderImageComponent",
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    const getImgByUrl = (img: string) => {
      try {
        const path: string = `../../../../assets/menu/${img}`;

        return new URL(path, import.meta.url).href;
      } catch (error) {
        console.log("error in getImgByUrl:", img);
      }
    };

    return {
      // func
      getImgByUrl
    };
  }
});
</script>

<style lang="scss" scoped>
.order-image {
  &__img {
    width: 80px;
  }
}
</style>
