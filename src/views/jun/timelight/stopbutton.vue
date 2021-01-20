<template>
  <div>
    <h1>자식 컴포넌트</h1>
    <h1>{{bulb}}</h1>
    <div id="timerBox" class="timerBox">
      {{ time }}
    </div>
    <v-icon x-large @click="start" color="blue">mdi-play</v-icon>
    <v-icon x-large @click="pause" color="blue">mdi-play-pause</v-icon>
    <v-icon x-large @click="stop" color="blue">mdi-stop-circle-outline</v-icon>
  

  </div>
</template>
<script>
export default {
  props: ["time", "bulb"],
  /* props: {
    time : {
      type : string,
      require : true,
      default : '0',
    }
  }, */
  data() {
    return {};
  },
  methods: {
    start() {
      this.$emit("start", 'aaaaa')
    },
    pause() {
      this.$emit("pause")
    },
    stop() {
      this.$emit("stop")
    },

  },


};
</script>