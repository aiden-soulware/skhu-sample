<template>
  <v-app>
    <sw-header />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SwHeader from './components/header';

export default {

  components: {
    SwHeader,
  },

  data: () => ({
    //
  }),
};
</script>
