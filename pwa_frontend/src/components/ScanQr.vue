<template>
  <v-card elevation="0" class="my-3 scroll">
    <v-card-title v-if="clientValue && recipeValue">
      <v-row class="mb-5">
        <v-col cols="12">
          Cliente: <strong>{{ clientValue.nombre }}</strong>
        </v-col>
        <v-col cols="12">
          Receta: <strong>{{ recipeValue.descripcion }}</strong>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-text-field
        v-model="qrCode"
        append-inner-icon="mdi-qrcode-scan"
        label="Escanear código QR..."
        variant="outlined"
        ref="refToElement"
      ></v-text-field>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="text-center font-weight-bold"
          variant="outlined"
          color="blue"
          dark
          @click="backToRecipes"
        >
          Volver a recetas
        </v-btn>
        <v-btn
          class="text-center font-weight-bold"
          variant="outlined"
          color="blue"
          dark
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import { useClientStore } from "@/store/clients";
import { useRecipeStore } from "@/store/recipes";
import { storeToRefs } from "pinia";
import { nextTick, onMounted, ref } from "vue";

const { clientValue, qrCode } = storeToRefs(useClientStore());
const { recipeValue } = storeToRefs(useRecipeStore());

const refToElement = ref();

onMounted(() => {
  nextTick(() => refToElement.value.focus());
});

const backToRecipes = () => {
  recipeValue.value = null;
};
</script>
