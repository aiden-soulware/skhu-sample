<template>
  <div>
    <v-btn v-on:click="fetchImage">이미지 가져오기</v-btn>

    <progress :value="uploadPercentage" max="100"></progress>
    <div v-for="(item, i) in items" v-bind:key="i">
      <h2>이미지 {{ i + 1 }}</h2>
      <img v-bind:src="item" width="400px" />
    </div>
  </div>
</template>
<script>

import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      // uploadPercentage: 0,
      promiseArray: [],
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.junImage.items,
      url:(state) => state.junImage.url,
      uploadPercentage:(state)=> state.junImage.uploadPercentage,
    ...mapGetters({

    })
    }),
  },

  methods: {
    ...mapActions({
      getImageItem: 'junImage/getImageItem',
      getImageBase64: 'junImage/getImageBase64',
      _fetchImage: 'junImage/fetchImage',
     
    }),
    fetchImage() {
      this._fetchImage(this.url).then(()=> {
        alert("이미지 불러오기 완료");
      })
    },

    // getData() {
      
    //   let temp;
    //   for (var i = 0; i < this.url.length; i++) {
        
    //     temp = this.getImageBase64(this.url[i]);//actions call
    //     this.promiseArray.push(temp);

    //     temp.then((data) => {
    //       this.getImageItem("data:image/png;base64," + data);
    //       this.uploadPercentage += 100 / this.url.length;//getters
    //     });
    //   }
                         
    //   Promise.all(this.promiseArray).then(function() {
    //     alert("이미지 불러오기 완료");
        
    //   });
    // },


    
  },
};
</script>
