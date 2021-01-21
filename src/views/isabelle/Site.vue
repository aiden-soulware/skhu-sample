<template>
  <div>
    <v-content>
      <router-link to="/status">Status</router-link>
      <button @click="getData">aaaaa</button>
      <img :src="results" />
    </v-content>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      results: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let url =
        "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format";
      let p = this.getImageBase64(url);
      console.log("1");
      p.then((data) => {
        console.log("2");
        this.results = "data:image/png;base64," + data;
      });

      console.log("3");
    },

    getImageBase64(url) {
      return new Promise((resolve, reject) => {
        axios.get(url, { responseType: "arraybuffer" }).then(
          (response) => {
            console.log("4");
            let temp = Buffer.from(response.data, "binary").toString("base64");
            resolve(temp);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
  },
};
</script>