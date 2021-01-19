<template>
  <div>
    <h1>This is an HJ page</h1>

    <div id>
      <div id="box" class="box">
        <!-- <timebtn :time="formatTime"@start="start " @pause="pause" @stop="stop"/> -->

        <timebtn
          :time="formatTime"
          @start="startbtn"
          @pause="pausebtn"
          @stop="stopbtn"
        />
        <!-- 부모 자식 전달  자식-> 부모전달 -->
        <!-- vuex -->
      </div>
    </div>

    <br />
    <br />
    <lightt :nameOfChild="message1" bulb="전구1" />
    <lightt :nameOfChild="message2" bulb="전구2" />
    <lightt :nameOfChild="message3" bulb="전구3" />
  </div>
</template>

<script>
import lightt from "./timelight/lighttime.vue";
import timebtn from "./timelight/stopbutton.vue";
export default {
  name: "Stopwatch",
  components: {
    lightt,
    timebtn,
  },
  data() {
    return {
      timer: null,
      time: 0,

      starFlag: true,
      timeString: null,
      message1: "OFF",
      message2: "OFF",
      message3: "OFF",
    };
  },
  timeLight() {
    return {
      light1: false,
      light2: false,
      light3: false,
    };
  },
  //ES6

  computed: {
    formatTime() {
      var min = Math.floor(this.time / 60);
      var hour = Math.floor(min / 60);
      var sec = this.time % 60;
      min = min % 60;
      var timeString =
        String(hour).padStart(2, "0") +
        ":" +
        String(min).padStart(2, "0") +
        ":" +
        String(sec).padStart(2, "0");

      return timeString;
    },
  },
  methods: {
    startbtn() {
      this.timer = setInterval(() => {
        this.time++;

        if (this.time % 3 == 0) {
          this.light1 = !this.light1;
          if (this.light1) {
            this.message1 = "ON";
          } else {
            this.message1 = "OFF";
          }
        }

        if (this.time % 7 == 0) {
          this.light2 = !this.light2;
          if (this.light2) {
            this.message2 = "ON";
          } else {
            this.message2 = "OFF";
          }
        }
        if (this.time % 10 == 0) {
          this.light3 = !this.light3;
          if (this.light3) {
            this.message3 = "ON";
          } else {
            this.message3 = "OFF";
          }
        }
      }, 1000);
    },
    stopbtn() {
      clearInterval(this.timer);
    },
    pausebtn() {
      this.time = 0;
    },
  },
};
</script>

<style>
.yellow1 {
  color: yellow;
}

.black1 {
  color: black;
}

.box {
  width: 200px;
  height: 200px;
}

.timerBox {
  width: 200px;
  outline: 2px solid black;
}

.timerBox .time {
  font-size: 30pt;
  color: #4c4c4c;
  text-align: center;
  font-family: sans-serif;
}

.btnBox {
  margin: 20px auto;
  text-align: center;
}

.btnBox .fa {
  margin: 0px 5px;
  font-size: 30pt;
  color: #faed7d;
  cursor: pointer;
}
</style>
