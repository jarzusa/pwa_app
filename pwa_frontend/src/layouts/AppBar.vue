<template>
  <v-app-bar color="blue" density="compact" :elevation="1">
    <v-app-bar-title>CloudFarmers</v-app-bar-title>
  </v-app-bar>
  <v-row class="ma-0 grey lighten-4 pb-6 overflow-auto">
    <v-col cols="12">
      <router-view />
    </v-col>
  </v-row>
</template>
