<template>
  <div class="test">
    <v-icon v-if=!on1>mdi-lightbulb-on</v-icon>
    <v-icon v-else>mdi-lightbulb-on-outline</v-icon>
   
  
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