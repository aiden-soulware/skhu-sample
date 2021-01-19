<template>
  <div>
 <div>
      <span>{{ postTestMin }}</span
      ><!-- 분 -->
      <span>:</span>
      <span>{{ postTestSec }}</span>
    </div>
    <div>
      <span>{{ recordTest }}</span>
      <!--중간 기록할 리스트-->
    </div>
    <v-btn @click="$emit('click')">Start</v-btn>
  </div>
</template>

<script>
export default {
  props: ["postTestMin","postTestSec","recordTest"],
};
</script>