import axios from "axios";
import { defineStore } from "pinia";

export const useClientStore = defineStore("clients", {
  state: () => ({
    clients: [] as any[],
    loading: false,
    clientValue: null as null | { recetas: Array<any> },
    recipeValue: null,
    qrCode: "",
  }),
  actions: {
    setListClients() {
      this.clients = [];
      this.loading = true;
      axios
        .get(`/client`)
        .then((response) => {
          console.log(response);

          this.clients = response?.data;
          this.loading = false;
        })
        .catch(() => {
          this.clients = [];
          this.loading = false;
        });
    },
  },
});
