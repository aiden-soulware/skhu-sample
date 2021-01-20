<template>
  <div class="test">
    <v-icon color="yellow" v-if="on1">mdi-lightbulb-on-outline</v-icon>
    <v-icon v-else>mdi-lightbulb</v-icon>
  </div>
</template>


<script>
export default {
  props: ["on1"],

  data() {
    return {};
  },
};
</script>