<template>
  <div>
    <h1>All Users({{count}})</h1>
    <h3>Seoul Users:{{seouls}}({{percent}}%)</h3>
    <v-list two-line>
      <v-list-item
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-item-avatar color="grey lighten-3">
          <v-img :src="user.src"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
        <v-list-item-title v-html="user.name"></v-list-item-title>
          <v-list-item-subtitle>id:#{{index}} / {{user.address}} 거주</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import {mapState,mapGetters} from 'vuex'
  export default {
    data() {
      return {
       
      }
    },
    computed:{
      ...mapGetters({
        count:'allUsersCount',
        seouls:'countOfSeoul',
        percent:'percentOfSeoul'
      }),
      ...mapState(['allUsers'])
      //...mapGetters(['allUsersCount','countOfSeoul','percentOfSeoul'])
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
