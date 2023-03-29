<template>
  <p class="text-h5 mb-5">Recetas</p>
  <v-row class="d-flex justify-center mb-10">
    <v-col cols="12" class="py-0">
      <v-select
        v-model="recipeSelectedLocal"
        variant="outlined"
        :items="recipes"
        item-title="descripcion"
        return-object
        transition="none"
        multiple
        chips
        @update:modelValue="filtersRecipes"
      ></v-select>
    </v-col>
  </v-row>
  <v-card variant="outlined" class="my-3 scroll">
    <v-card-title v-if="clientValue">
      <v-row class="mx-2 my-2">
        <v-col cols="12">
          Cliente: <strong>{{ clientValue.nombre }}</strong>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-chip-group v-if="clientValue && recipes.length > 0">
        <v-chip
          v-for="(recipe, i) in dataRecipes"
          class="ma-2"
          color="default"
          :key="i"
          label
          prepend-icon="mdi-flower"
          @click="changeValueModel(recipe)"
        >
          {{ recipe.descripcion }}
        </v-chip>
      </v-chip-group>
      <h2 v-else class="text-center ma-5">
        No existen recetas para este cliente
      </h2>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="text-center font-weight-bold"
          variant="outlined"
          color="blue"
          dark
          @click="backToClient"
        >
          Volver a clientes
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { useClientStore } from "@/store/clients";
import { useRecipeStore } from "@/store/recipes";
import { storeToRefs } from "pinia";
import { ref, defineProps, onMounted, watch } from "vue";
const { clientValue } = storeToRefs(useClientStore());
const { recipeValue, recipes, loading, recipeSelected, dataRecipes } =
  storeToRefs(useRecipeStore());
const { setListRecipes } = useRecipeStore();
defineProps({
  recipes: {
    type: Array,
  },
});

// const dataRecipes = ref<any>([]);

const recipeSelectedLocal = ref<any[]>([]);

const textRecipe = ref("");

onMounted(async () => {
  recipeValue.value = null;
  if (clientValue.value) await setListRecipes(clientValue.value.id);

  recipeSelectedLocal.value = [...recipeSelected.value];
});

watch(
  () => loading.value,
  (val) => {
    console.log(val);

    if (!val) {
      filtersRecipes(recipeSelectedLocal.value);
    }
  }
);

// watch(
//   () => recipes.value,
//   (val) => {
//     dataRecipes.value = [...recipes.value];
//     console.log(dataRecipes.value);
//   }
// );

const changeValueModel = (event: any) => {
  recipeValue.value = event;
};

const textSearchRecipe = () => {
  if (textRecipe.value.trim() != "") {
    dataRecipes.value = [
      ...recipes.value.filter(
        (element) =>
          element.descripcion
            .toLowerCase()
            .search(textRecipe.value.toLowerCase()) > -1
      ),
    ];
  } else {
    dataRecipes.value = [...recipes.value];
  }
};

const filtersRecipes = (event: any) => {
  recipeSelected.value = [...recipeSelectedLocal.value];
  if (event.length > 0) {
    dataRecipes.value = [...event];
  } else {
    dataRecipes.value = [...recipes.value];
  }
};

const backToClient = (event: any) => {
  clientValue.value = null;
};
</script>
