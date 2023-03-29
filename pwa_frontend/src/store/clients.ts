import axios from "axios";
import { defineStore } from "pinia";

export const useClientStore = defineStore("clients", {
  state: () => ({
    clients: [] as any[],
    dataClients: [] as any[],
    loading: false,
    clientValue: null as null | {
      id: number | string;
      nombre: string;
      recetas: Array<any>;
    },
    clientSelected: [] as Array<any>,
    qrCode: "",
  }),
  actions: {
    setListClients() {
      this.clients = [];
      this.dataClients = [];
      this.loading = true;
      axios
        .get(`/client`)
        .then((response) => {

          this.clients = response?.data;
          this.dataClients = response?.data;
          this.loading = false;
        })
        .catch(() => {
          this.clients = [];
          this.dataClients = [];
          this.loading = false;
        });
    },
  },
});
