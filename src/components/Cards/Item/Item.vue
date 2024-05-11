<template>
  <img :src="getImgByUrl(image)" alt="card-image" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemComponent",
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    const getImgByUrl = (img: string) => {
      try {
        const path: string = `../../../assets/${img}`;

        return new URL(path, import.meta.url).href;
      } catch (error) {
        console.log("error in getImgByUrl:", img);
      }
    };

    return {
      //   func
      getImgByUrl
    };
  }
});
</script>

<style lang="scss" scoped></style>
