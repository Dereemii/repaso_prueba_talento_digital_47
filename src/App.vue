<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

import {mapActions} from 'vuex';
export default {
  name: 'App',
  // components: {
  // },
  data: () => ({
    //
  }),
  methods:{
    ...mapActions(["getCourses"]),
  },
  created(){
    this.getCourses();
  }
};
</script>
