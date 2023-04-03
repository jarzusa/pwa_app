<template>
  <p class="text-h5 mb-5">Cliente</p>
  <v-row class="d-flex justify-center mb-10">
    <v-col cols="12" class="py-0">
      <v-select
        v-model="clientSelectedLocal"
        variant="outlined"
        :items="clients"
        item-title="nombre"
        return-object
        transition="none"
        multiple
        chips
        @update:modelValue="filtersClient"
      ></v-select>
    </v-col>
  </v-row>
  <v-card variant="outlined" class="my-3 scroll">
    <v-card-text>
      <v-chip-group>
        <v-chip
          v-for="(client, i) in dataClients"
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
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useClientStore } from "@/store/clients";

const { clients, loading, clientValue, clientSelected, dataClients } =
  storeToRefs(useClientStore());
const { setListClients } = useClientStore();

const clientSelectedLocal = ref<any[]>([]);

onMounted(async () => {
  clientValue.value = null;
  await setListClients();
  clientSelectedLocal.value = [...clientSelected.value];
});

watch(
  () => loading.value,
  (val) => {
    if (!val) {
      filtersClient(clientSelectedLocal.value);
    }
  }
);

const filtersClient = (event: object[]) => {
  clientSelected.value = [...clientSelectedLocal.value];
  if (event.length > 0) {
    dataClients.value = [...event];
  } else {
    dataClients.value = [...clients.value];
  }
};

const changeValueModel = (event: {
  id: string | number;
  nombre: string;
  recetas: object[];
}) => {
  loading.value = true;
  clientValue.value = event;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>
