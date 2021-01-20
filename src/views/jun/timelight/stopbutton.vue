<template>
  <div>
    <h1>자식 컴포넌트</h1>
    <h1>{{bulb}}</h1>
    <div id="timerBox" class="timerBox">
      {{ time }}
    </div>
    <div class="btnBox">
      <i @click="start" class="fa fa-play" aria-hidden="true"></i>
      <i @click="pause" class="fa fa-pause" aria-hidden="true"></i>
      <i @click="stop" class="fa fa-stop" aria-hidden="true"></i>

    </div>

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