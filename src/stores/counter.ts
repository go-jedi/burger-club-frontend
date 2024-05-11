import { defineStore } from "pinia";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref<number>(0)

//   const doubleCount = computed(() => count.value * 2)

//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

// CounterState
// StateCounter
// StateC

type State = {
  count: number;
};

export const useCounterStore = defineStore("counter", {
  state: (): State => {
    return {
      count: 0
    };
  },
  getters: {},
  actions: {}
});
