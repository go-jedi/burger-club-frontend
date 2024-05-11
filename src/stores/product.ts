import { defineStore } from "pinia";

export type GoodsType = {
  id: number;
  name: string;
  image: string;
  price: number;
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
          image: "new-in-club.png",
          price: 1.0
        },
        {
          id: 2,
          name: "Burger",
          image: "burger.png",
          price: 2.0
        },
        {
          id: 3,
          name: "Sides",
          image: "sides.png",
          price: 3.0
        },
        {
          id: 4,
          name: "Fries",
          image: "fries.png",
          price: 4.0
        },
        {
          id: 5,
          name: "Deserts And Beverages",
          image: "deserts.png",
          price: 5.0
        },
        {
          id: 6,
          name: "Launch Offer @99",
          image: "launch.png",
          price: 6.0
        },
        {
          id: 7,
          name: "Wraps",
          image: "wraps.png",
          price: 7.0
        },
        {
          id: 8,
          name: "Salads",
          image: "salads.png",
          price: 8.0
        }
      ]
    };
  },
  getters: {},
  actions: {}
});
