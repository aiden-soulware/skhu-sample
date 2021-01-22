<template>
  <div>
    <h1>사용자({{ count }})</h1>
    <h3>
      Seoul Users:{{ seouls }}명 ({{
      percent
      }}%)
    </h3>

    <v-list two-line>
      <v-list-item-title
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
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
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      count:'allUsersCount',
      seouls : 'countOfSeoul',
      percent:'percentOfSeoul',
    }),
    ...mapState(['allUsers'])
    // ...mapGetters(["allUsers", "countOfSeoul", "percentOfSeoul"]),
  },
  mounted() {
    EventBus.$on("signUp", (users) => {
      this.$store.state.allUsers.push(users);
    });
  },
};
</script>
