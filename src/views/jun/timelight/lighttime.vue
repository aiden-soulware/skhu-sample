<template>
  <div>
    <h1>{{ bulb }}</h1>

    <div v-if="nameOfChild != 'ON'">
      <v-icon x-large>mdi-lightbulb</v-icon>
    </div>
    <div v-else>
      <v-icon x-large color="yellow">mdi-lightbulb-outline</v-icon>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nameOfChild", "bulb"],
  data() {
    return {};
  },
};
</script>