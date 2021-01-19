<template>
  <div id="clock">
    <StopWatchVue
      :postTestMin="postTestMin"
      :postTestSec="postTestSec"
      :recordTest="recordTest"
      :count="count"
      @click="countTime"
    />
    <div>
      <!--시작/재시작/기록 버튼-->
    </div>
    <LightVue :on1="on1" />
    <LightVue :on1="on2" />
    <LightVue :on1="on3"/>
  </div>
</template>
<script>
import LightVue from "./Light.vue";
import StopWatchVue from "./Stopwatch.vue";
export default {
  components: {
    LightVue,
    StopWatchVue,
  },
  data() {
    return {
      on1: false,
      on2: false,
      on3: false,
      stTime: 0,
      timerStart: "",
      postTestMin: "00",
      postTestSec: "00",
      recordTest: "00",
      count: 0,
    };
  },
  methods: {
    countTime() {
      if (!this.stTime) {
        this.stTime = Date.now();
        this.timerStart = setInterval(() => this.timer(this.stTime), 1000);
      }
    },
    timer(stTime) {
      var nowTime = new Date().getTime(); //1ms당 한 번씩 현재시간 timestamp를 불러와 nowTime에 저장
      var time = nowTime - stTime;
      var timeSec = Math.floor(time / 1000);
      var min = Math.floor(timeSec / 60);
      var sec = Math.floor(timeSec % 60);

      if (timeSec % 3 == 0) {
        this.on1 = !this.on1;
      }
      if (timeSec % 7 == 0) {
        this.on2 = !this.on2;
      }
      if (timeSec % 10 == 0) {
        this.on3 = !this.on3;
      }

      if (this.on1 && this.on2 && this.on3) {
        this.count++;
        this.recordTest = this.count;
      }
      this.printTime(min, sec);

      if (min == 0 && sec == 10) {
        clearInterval(this.timerStart);
      }
    },
    addZero(time) {
      return (time < 10 ? "0" : "") + time;
    },
    printTime(min, sec) {
      this.postTestMin = this.addZero(min);
      this.postTestSec = this.addZero(sec);
    },
  },
};
</script>