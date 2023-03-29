<template>
  <p class="text-h5">Cliente</p>
  <v-row class="d-flex justify-center mb-10">
    <v-col cols="12" lg="10" md="10" class="py-0">
      <v-text-field
        v-model="textClient"
        class="mt-4"
        append-inner-icon="mdi-account-group"
        label="Nombre de cliente."
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" lg="2" md="2" class="d-flex justify-center py-0">
      <v-btn
        color="blue"
        class="mt-4 text-capitalize"
        size="x-large"
        @click="textSearchClient"
        >Buscar</v-btn
      >
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

const { clients, loading, clientValue } = storeToRefs(useClientStore());
const { setListClients } = useClientStore();

const dataClients = ref<any>([]);

const textClient = ref("");

onMounted(async () => {
  clientValue.value = null;
  await setListClients();
});

watch(
  () => clients.value,
  (val) => {
    dataClients.value = [...clients.value];
    console.log(dataClients.value);
  }
);

const textSearchClient = () => {
  if (textClient.value.trim() != "") {
    dataClients.value = [
      ...clients.value.filter(
        (element) =>
          element.nombre.toLowerCase().search(textClient.value.toLowerCase()) >
          -1
      ),
    ];
  }
  else {
    dataClients.value = [...clients.value]
  }
};

const changeValueModel = (event: any) => {
  loading.value = true;
  clientValue.value = event;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>
