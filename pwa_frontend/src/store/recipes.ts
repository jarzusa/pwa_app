import axios from "axios";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    loading: false,
    recipes: [] as any[],
    dataRecipes: [] as any[],
    recipeValue: null as {
      descripcion: string;
      receta_tipo_ramo_id: number;
      tipo_ramo_id: number;
      grado_id: number;
    } | null,
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
