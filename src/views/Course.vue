<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Curso:{{course.name}}</h1>
        <p>{{course.description}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="example in examples" :key="example.id">
        <v-card class="mx-auto" max-width="400">
          
           <v-card-title>{{example.data.title}}</v-card-title>
          <v-card-subtitle class="pb-0">
           {{example.data.description}}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <audio controls>
              <source :src="example.data.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name:"Course-component",
  props:['id'],
  data:function(){
    return{
      course:{
      },
      examples:[],
    }
  },
  computed:{
    ...mapState(['courses'])
  },
  methods:{
    getCourse(id){
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/"+id)
        .then(resp=>{
          console.log(resp.data.data,'resp.data.data');
          console.log(resp.data,'resp.data');
          this.course = resp.data.data;
        })
        .catch(error=>{
          console.log(error);
        })
    },
    findExamples(){
      // this.courses.find((course)=>{
      //   return course.id === this.id
      // })

      let course = this.courses.find((course) => course.id === this.id);
      console.log(course,'findExamples');
      if(course){
        this.examples = course.examples;
      }
    }
  },
  created(){
    //console.log(this.$route.params.id)
    console.log(this.id);
    this.getCourse(this.id)
  },
  mounted(){
    this.findExamples();
  }
};
</script>

<style></style>
