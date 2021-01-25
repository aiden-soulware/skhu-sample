<template>
  <div>
    <v-btn v-on:click="getData">이미지 가져오기</v-btn>

    <progress :value="uploadPercentage" max="100"></progress>
    <div v-for="(item, i) in items" v-bind:key="i">
      <h2>이미지 {{ i + 1 }}</h2>
      <img v-bind:src="item" width="400px" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      imageData: null,
      uploadPercentage: 0,
      // items: [],
      promiseArray: [],
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.junImage.items,
    }),
  },

  methods: {
    ...mapActions({
      getImageItem: "junImage/getImageItem",
    }),

    getData() {
      let url = [
        "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
        "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
        "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutO1nmrYhFBcRcdUQPaOPp-HAiJrnzH-nuA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7OhfW0BhZzL3D4Swp_A7GQPwJE2OhsjXYw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2UDtN4kxCCQYnQ4_yoceVrbDOnEED7aHig&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nct0eVHBKTlAJkfX5suKzzOtOOrC0p2c7A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeIhe-_I6rzcN1Oa4xPvttkUNcrYEv8EP2Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPId4Hjm02Db3jqaXTn6UpzZzVfJB7I8lUw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cCPc3QZCzUKtoh9rdC5WTfLegbi26jvMmA&usqp=CAU",
      ];

      let temp;
      for (var i = 0; i < url.length; i++) {
        temp = this.getImageBase64(url[i]);
        this.promiseArray.push(temp);

        temp.then((data) => {
          this.getImageItem("data:image/png;base64," + data);
          this.uploadPercentage += 100 / url.length;
        });
      }

      Promise.all(this.promiseArray).then(function() {
        alert("이미지 불러오기 완료");
      });
    },

    getImageBase64(url) {
      return new Promise((resolve, reject) => {
        axios
          .get(url, {
            responseType: "arraybuffer",
          })
          .then(
            (response) => {
              let temp = Buffer.from(response.data, "binary").toString(
                "base64"
              );
              resolve(temp);
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
