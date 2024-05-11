<template>
  <div class="adding">
    <div>
      <button class="adding__add">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddingComponent",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.adding {
  margin-top: 5px;

  &__add {
    cursor: pointer;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #e79600;
    font-size: 15px;
    font-weight: 700;
    color: #fff;

    &:hover {
      background-color: #ffb833f7;
    }
  }
}
</style>
