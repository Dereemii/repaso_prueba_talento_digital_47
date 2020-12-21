<template>
  <div>
    <div class="banner">
      <h1>Live Coding</h1>
    </div>
    <v-container>
      <v-row>
        <v-col v-for="course in courses" :key="course.id" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="course.data.img"
            >
              <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
            </v-img>
            <v-card-title>{{course.data.name}}</v-card-title>
            <v-card-subtitle class="pb-0">
             {{course.data.description}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange" text @click="redirect(course.id)">
                Visitar
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CourseGallery",
  computed: {
    ...mapState(["courses"]),
  },
  methods:{
    redirect(id){
     
      this.$router.push(`/curso/${id}`)
    }
  }
};
</script>

<style scoped>
.banner{
  height:200px;
  border:1px solid green;
}
</style>
