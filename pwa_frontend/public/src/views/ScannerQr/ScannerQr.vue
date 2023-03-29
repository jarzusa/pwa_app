<template>
  <div>
    <p class="text-center my-12 mb-2 font-weight-bold text-uppercase text-h4">
      <v-icon icon="mdi-qrcode-scan" />
      Lector de QR
    </p>
    <v-row class="d-flex justify-center mt-5">
      <v-col cols="12" lg="8" md="8">
        <v-card min-height="400px" elevation="10">
          <v-card-text class="mt-2">
            <v-form class="px-6 pt-4">
              <ScanQr v-if="clientValue && recipeValue" @scanQr="scanQr" />

              <SelectClient v-if="!clientValue" />
              <SelectRecipe v-else-if="clientValue && !recipeValue" />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import SelectClient from "@/components/SelectClient.vue";
import SelectRecipe from "@/components/SelectRecipe.vue";
import ScanQr from "@/components/ScanQr.vue";
import { useClientStore } from "@/store/clients";
import { storeToRefs } from "pinia";

const { clientValue, recipeValue } = storeToRefs(useClientStore());

const recipes = ref<Array<{ description: string }>>([]);

const scanQr = () => {
  console.log("Entre");
};
</script>
<style lang="scss">
.v-card {
  border-radius: 10px !important;
}
</style>
