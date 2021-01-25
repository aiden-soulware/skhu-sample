<template>
  <v-app-bar app color="primary" dark>
    <!--     <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn> -->
    <v-btn :to="{name:'jun:stopwatch'}">jun:stopwatch</v-btn>
    <v-btn :to="{name:'jun:image'}">jun:image</v-btn>
    <v-btn :to="{name:'jun:vuexex'}">jun:vuexex</v-btn>
    <v-btn :to="{name:'jun:ImageApp'}">jun:ImageApp</v-btn>
     <v-btn :to="{name:'jun:ImageApp2'}">jun:ImageApp2</v-btn>
    <v-btn :to="{name:'isabelle:app'}">isabelle:app</v-btn>
    <v-btn :to="{name:'isabelle:site'}">isabelle:site</v-btn>
    <v-btn :to="{name:'isabelle:promise'}">isabelle:promise</v-btn>
    <v-btn :to="{name:'isabelle:user'}">isabelle:user</v-btn>
    <v-btn :to="{name:'isabelle:users'}">isabelle:users</v-btn>
    <v-btn :to="{name:'isabelle:image'}">isabelle:image</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({

  }),
}
</script>
