<template>
  <p class="text-h5">Cliente</p>
  <v-text-field
    class="mt-4"
    append-inner-icon="mdi-account-group"
    label="Nombre de cliente."
    variant="outlined"
  ></v-text-field>
  <v-card variant="outlined" class="my-3 scroll">
    <v-card-text>
      <v-chip-group>
        <v-chip
          v-for="(client, i) in clients"
          :key="i"
          class="ma-2"
          color="default"
          label
          prepend-icon="mdi-account-group"
          @click="changeValueModel(client)"
        >
          {{ client.nombre }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { ref, onMounted, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import { useClientStore } from "@/store/clients";

// const emit = defineEmits(["updateRecipes"]);

const { clients, loading, clientValue } = storeToRefs(useClientStore());
const { setListClients } = useClientStore();

onMounted(() => {
  clientValue.value = null;
  setListClients();
});

const changeValueModel = (event: any) => {
  loading.value = true;
  clientValue.value = event;
  // emit("updateRecipes", event.recetas);
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>
