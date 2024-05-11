<template>
  <div class="close">
    <button class="close__btn" @click="onClose">
      <img alt="close" class="close__img" src="@/assets/close.svg" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CloseComponent",
  setup() {
    const tg = ref(window.Telegram.WebApp);

    const onClose = (): void => {
      try {
        tg.value.close();
      } catch (error) {
        console.log("error in onClose:", error);
      }
    };

    return {
      // func
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.close {
  display: flex;
  justify-content: end;
  
  &__btn {
    width: 45px;
    height: 45px;
    cursor: pointer;
    background: none;
    border: 1px solid #fff;
    border-radius: 100%;

    &:hover {
      opacity: 0.6;
    }
  }

  &__img {
    width: 30px;
    height: 30px;
  }
}
</style>
