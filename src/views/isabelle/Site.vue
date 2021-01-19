<template>
  <div>
    <router-link to="/status">Status</router-link>
    <button @click="getData">aaaaa</button>
    <img :src="results" />

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
      p.then((data) => {
        this.results = "data:image/png;base64," + data;
      });
    },

    getImageBase64(url) {
      return new Promise((resolve, reject) => {
        axios.get(url, { responseType: "arraybuffer" }).then(
          (response) => {
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