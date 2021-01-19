<template>
  <div>
    <h1>{{ bulb }}</h1>

    <div v-if="nameOfChild === 'ON'">
      {{ nameOfChild }}
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
