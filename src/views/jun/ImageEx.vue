<template>
  <div>
    <h2>Image Axios</h2>
    <progress :value="uploadPercentage" max="100"></progress>
    <v-btn v-on:click="getData">이미지 가져오기</v-btn>
    <img v-bind:src="imageData"/>
    <br />
   
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imageData: null,
      uploadPercentage: 0,
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
        axios
          .get(url, {
            responseType: "arraybuffer",
           
            onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
            console.log(this.uploadPercentage)
          }.bind(this),
          })
          .then(
            (response) => {
              let temp = Buffer.from(response.data, "binary").toString(
                "base64"
              );
              resolve(temp);
              // alert("이미지 불러오기 완료");
            },
            (err) => {
              console.log(err);
              reject(err);
            }
          );
      });
    },
  },
};
</script>

<style scoped></style>
