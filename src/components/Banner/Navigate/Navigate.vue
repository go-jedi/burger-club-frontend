<template>
  <div class="navigate">
    <div v-for="link in links" :key="link.id" class="navigate__content">
      <RouterLink :to="link.link" class="navigate__link">
        {{ link.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type LinksType = {
  id: number;
  name: string;
  link: string;
};

export default defineComponent({
  name: "NavigateComponent",
  setup() {
    const links = ref<LinksType[]>([
      {
        id: 1,
        name: "Home",
        link: "/"
      },
      {
        id: 2,
        name: "Menu",
        link: "/menu"
      },
      {
        id: 3,
        name: "About",
        link: "/about"
      },
      {
        id: 4,
        name: "Shop",
        link: "/shop"
      }
    ]);

    return {
      // ref
      links
    };
  }
});
</script>

<style lang="scss" scoped>
.navigate {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content:not(:first-child) {
    margin-left: 32px;
  }

  &__link {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    font-style: italic;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
