<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <v-list dense>
      <v-list-item>
        <v-list-item-title>이름</v-list-item-title>
        <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>주소</v-list-item-title>
        <v-list-item-subtitle>{{ address }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>전화번호</v-list-item-title>
        <v-list-item-subtitle>{{ phone }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title> 반려견 유무</v-list-item-title>
        <v-list-item-subtitle>{{ hasDogkr }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ["name","address","phone","hasDog"],
  computed:{
      hasDogkr(){
          return this.hasDog === true ? '있다':'없다'
      }
  }
};
</script>