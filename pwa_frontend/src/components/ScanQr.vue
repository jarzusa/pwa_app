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
          @click="scan"
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>

  <v-snackbar v-model="showSnackbar" :timeout="3000">
    {{ message }}
  </v-snackbar>
</template>
<script lang="ts" setup>
import { useClientStore } from "@/store/clients";
import { useRecipeStore } from "@/store/recipes";
import { useScanStore } from "@/store/scan";
import { storeToRefs } from "pinia";
import { nextTick, onMounted, ref } from "vue";

const { clientValue, qrCode } = storeToRefs(useClientStore());
const { recipeValue } = storeToRefs(useRecipeStore());
const { message, showSnackbar } = storeToRefs(useScanStore());
const { scanQrCode } = useScanStore();

const refToElement = ref();

onMounted(() => {
  nextTick(() => refToElement.value.focus());
});

const scan = async () => {
  console.log(process.env);

  const bodyRequest = {
    usuario_id: Number(process.env.VUE_APP_USUARIO_ID),
    empresa_id: Number(process.env.VUE_APP_EMPRESA_ID),
    serial: qrCode.value,
    cliente_id: clientValue.value?.id,
    receta_id: recipeValue.value?.id
  };
  scanQrCode(bodyRequest);
};
const backToRecipes = () => {
  recipeValue.value = null;
};
</script>
