<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="Regular" v-model="user.name" >   
    </v-text-field>
    <v-text-field label="Regular" v-model="user.address" >   
    </v-text-field>
    <v-text-field label="Regular" v-model="user.phone" >   
    </v-text-field>
     <v-radio-group v-model="user.hasDog">
      <v-radio
        label="반려견 있음"
        :value="true"
      ></v-radio>
      <v-radio
        label="반려견 없음"
        :value="false"
      ></v-radio>
      </v-radio-group>
      <v-btn @click="changeUser">수정 완료</v-btn>
  </div>
</template>

<script>
import { EventBus } from "@/main.js"
export default {
  props: ["name", "address", "phone", "hasDog"],
  data(){
      return{
          user:{}

      }
  },
  created(){
      this.user.name = this.name//props로 넘어왔던 값들을 자식 컴포넌트인 userEdit내의 user오브젝트 안에 재할당
      this.user.address = this.address
      this.user.phone = this.phone
      this.user.hasDog = this.hasDog
  },
  methods:{
      changeUser(){
          this.$emit("child",this.user)
          //EventBus.$emit("userWasEdited",new Date())//eventbus인스턴스가 부모 컴포넌트 역할
      EventBus.userWasEdited(new Date())
      }
  }

}

</script>