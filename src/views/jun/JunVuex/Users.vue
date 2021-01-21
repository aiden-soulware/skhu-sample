<template>

  <v-container grid-list-xl>
    <v-list-item-content>Vuex 실습공간</v-list-item-content>
    <v-layout row wrap >
      <v-flex xs6>
        <AllUsers></AllUsers>
      </v-flex>
      <v-flex xs6>
        <SignUp></SignUp>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AllUsers from './Users/AllUsers'
  import SignUp from './Users/SignUp'

  export default {
    components: {
      AllUsers,
      SignUp
    },
  }

</script>