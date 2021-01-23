<template>
  <div style="height: 200px" class="blue lighten-3 pa-3">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>User 컴포넌트</h1>
        <p>이름: {{ name }}</p>
        <v-btn depressed color="primary" @click="changeName()">이름변경</v-btn>
        <hr />
      </v-flex>
      <v-flex>
        <UserDetail
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit          
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data(){
      return{
        name:"isabelle",
        address:"seoul",
        phone:"123-4567",
        hasDog:true
      }
  },
  methods :{
      
      parents(user){
          this.name = user.name
          this.address = user.address
          this.phone = user.phone
          this.hasDog = user.hasDog
      }
  }
}
</script>