<template>
  <v-app>
    <sw-header />

    <v-main>
      <router-view />
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
