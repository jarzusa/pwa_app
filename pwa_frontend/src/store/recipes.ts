import axios from "axios";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    recipes: [] as any[],
    recipeValue: null as { descripcion: string } | null,
  }),
  actions: {
    setListRecipes(client_id: string | number) {
      this.recipes = [];
      axios
        .get(`/recipe/${client_id}`)
        .then((response) => {
          console.log(response);

          this.recipes = response?.data;
        })
        .catch(() => {
          this.recipes = [];
        });
    },
  },
});
