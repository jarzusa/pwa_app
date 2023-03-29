<template>
  <p class="text-h5">Recetas</p>
  <v-text-field
    class="mt-4"
    append-inner-icon="mdi-flower"
    label="Recetas"
    variant="outlined"
  ></v-text-field>
  <v-card variant="outlined" class="my-3 scroll">
    <v-card-text>
      <v-chip-group v-if="clientValue">
        <v-chip
          v-for="(recipe, i) in clientValue.recetas"
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
import { storeToRefs } from "pinia";
import { defineEmits, defineProps, onMounted } from "vue";
const { clientValue, recipeValue } = storeToRefs(useClientStore());
defineProps({
  recipes: {
    type: Array,
  },
});

// const emit = defineEmits(["updateRecipes"]);

const changeValueModel = (event: any) => {
  recipeValue.value = event;
  console.log(event);
};

onMounted(() => {
  console.log(clientValue);
  console.log(recipeValue);
  
  recipeValue.value = null;
});

const backToClient = (event: any) => {
  clientValue.value = null;
};
</script>
