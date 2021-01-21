<template>
  <div>
    <h1>사용자({{$store.getters.allUsersCount}})</h1>
    
    <v-list two-line>
      <v-list-item-title v-for="(user, index) in $store.state.allUsers" :key="index" avatar>
        <v-list-item-avatar size="100" color="grey lighten-3">
          <img :src="user.src"
        /></v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="user.name"></v-list-item-title>
          <v-list-item-subtitle
            >id:#{{ index }} / {{ user.address }} 거주</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item-title>
    </v-list>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";

export default {
  data() {
    return {
      
    };
  },
  mounted() {
    EventBus.$on("signUp", (users) => {
      this.$store.state.allUsers.push(users);
    });
  },
};
</script>
