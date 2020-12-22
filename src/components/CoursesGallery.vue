<template>
  <div>
    <!-- <div class="banner">
      <h1>Live Coding</h1>
    </div> -->
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
              <v-btn color="orange" text @click="redirect(course.id)" v-text="typeGallery=='public' ? 'visitar': 'editar' ">
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
  props:{
    typeGallery:{
      type: String,
      default:"public"
    }
  },
  computed: {
    ...mapState(["courses"]),
  },
  methods:{
    redirect(id){
      if(this.typeGallery === "public") this.$router.push(`/curso/${id}`)
      else if(this.typeGallery ==="admin") this.$router.push(`/admin/curso/${id}`)
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
