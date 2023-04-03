import axios from "axios";
import { defineStore } from "pinia";

export const useScanStore = defineStore("scans", {
  state: () => ({
    loading: false,
    message: "",
    status: null,
    showSnackbar: false,
  }),
  actions: {
    scanQrCode(bodyRequest: object) {
      this.loading = true;
      this.showSnackbar = false;
      axios
        .post(`/scan`, bodyRequest)
        .then((response) => {
          console.log(response.data);

          const { message, status } = response.data;
          this.status = status;
          this.message = message;
          this.loading = false;
          this.showSnackbar = true;
        })
        .catch((error) => {
          const { message, status } = error.response.data;
          this.status = status;
          this.message = message;
          this.loading = false;
          this.showSnackbar = true;
        });
    },
  },
});
