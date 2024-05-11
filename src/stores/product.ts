import { defineStore } from "pinia";

export type GoodsType = {
  id: number;
  name: string;
  image: string;
};

type ProductState = {
  goods: GoodsType[];
};

export const useProductStore = defineStore("product", {
  state(): ProductState {
    return {
      goods: [
        {
          id: 1,
          name: "New In the Club",
          image: "new-in-club.png"
        },
        {
          id: 2,
          name: "Burger",
          image: "burger.png"
        },
        {
          id: 3,
          name: "Sides",
          image: "sides.png"
        },
        {
          id: 4,
          name: "Fries",
          image: "fries.png"
        },
        {
          id: 5,
          name: "Deserts And Beverages",
          image: "deserts.png"
        },
        {
          id: 6,
          name: "Launch Offer @99",
          image: "launch.png"
        },
        {
          id: 7,
          name: "Wraps",
          image: "wraps.png"
        },
        {
          id: 8,
          name: "Salads",
          image: "salads.png"
        }
      ]
    };
  },
  getters: {},
  actions: {}
});
