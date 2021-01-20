<template>
  <div>
    <h2>Image Axios</h2>
    <button v-on:click="getData">이미지 가져오기</button>
    <img v-bind:src="imageData" width="200px" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imageData: null,
    };
  },
  
  methods: {
      getData() {
      let url =
        "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format";
      let temp = this.getImageBase64(url);
      temp.then((data) => {
        this.imageData = "data:image/png;base64," + data;
      });
    },

    getImageBase64(url) {
      return new Promise((resolve, reject) => {
        axios.get(url, { responseType: "arraybuffer" }).then(
          (response) => {
            let temp = Buffer.from(response.data, "binary").toString("base64");
            console.log(resolve(temp))
            resolve(temp);
          },
          (err) => {
            console.log(err)
            reject(err);
          }
        );
      });
    },

  },
};
</script>

<style scoped></style>
