<template>
  <div class="d-flex justify-center align-center background-gradient-blue">
    <v-card width="60%" class="elevation-6">
      <v-card-title class="align-center mt-5">
        <v-img
          class="mx-auto bg-white pa-0"
          width="300"
          height="100"
          :aspect-ratio="1"
          :src="require('@/assets/LogoCloudFarmers.png')"
        ></v-img>
      </v-card-title>
      <v-card-text class="mt-4">
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <v-form fast-fail>
              <v-text-field
                v-model="formVariable.username"
                label="Usuario"
                variant="outlined"
                density="compact"
              ></v-text-field>
              <v-text-field
                v-model="formVariable.password"
                label="Contraseña"
                variant="outlined"
                density="compact"
              ></v-text-field>
              <v-text-field
                v-model="formVariable.password"
                label="Contraseña"
                variant="outlined"
                density="compact"
              ></v-text-field>
              <v-btn
                color="blue"
                block
                class="mt-2 text-capitalize"
                @click="login"
                >Iniciar sesión</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import { ref } from "vue";
const formVariable = ref({
  username: "",
  password: "",
});

const login = () => {
  router.push("/scanner-qr");
};
</script>
<style lang="scss">
.background-gradient-blue {
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #00aeff 0%,
    #00ffff 100%
  ) !important;
}
</style>
