import axios from "axios";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    loading: false,
    recipes: [] as any[],
    dataRecipes: [] as any[],
    recipeValue: null as { descripcion: string; id: number } | null,
    recipeSelected: [] as Array<any>,
  }),
  actions: {
    setListRecipes(client_id: string | number) {
      this.recipes = [];
      this.dataRecipes = [];
      this.loading = true;
      axios
        .get(`/recipe/${client_id}`)
        .then((response) => {
          this.loading = false;

          this.recipes = response?.data;
        })
        .catch(() => {
          this.loading = false;
          this.dataRecipes = [];
          this.recipes = [];
        });
    },
  },
});

