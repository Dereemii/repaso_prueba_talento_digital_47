<template>
  <div>
    <NavbarAdmin></NavbarAdmin>
    <h1>Editar aca</h1>
    <v-container>
      <v-row justify="center">
        <v-col md="6">
          <v-form ref="form">
              <v-text-field
                v-model="name"
                :counter="20"
                label="Nombre Curso"
                :rules="[(v) => !!v || 'Nombre requerido']"
                required
              ></v-text-field>

              <v-text-field
                v-model="image"
                label="Src Imagen"
                :rules="[(v) => !!v || 'Imagen requerida']"
                required
              ></v-text-field>

              <v-textarea
                v-model="description"
                filled
                label="Descripción"
                auto-grow
                :rules="[(v) => !!v || 'Descripción requerida']"
                required
              ></v-textarea>

              <v-btn color="success" class="mr-4" @click="updateCourse">Editar</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarAdmin from '@/components/AdminNavbar.vue'
export default {
  name:"UpdateCourseComponent",
  data:function(){
    return {
      name:"",
      image:"",
      description:""
    }
  },
  components:{
    NavbarAdmin
  },
  methods:{
    updateCourse(){
      if(!this.$refs.form.validate()) return 

      let editData ={
        name: this.name,
        img: this.image,
        description: this.description
      }
      axios.put("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/"+this.$route.params.id, editData)
        .then(resp=>{
          console.log(resp)
          this.$router.push('/admin');
        })
        .catch(error=>{
          console.log(error)
        })
    },
    
    getCourse(){
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/"+this.$route.params.id)
        .then(resp=>{
          // console.log(resp.data.data,'resp.data.data');
          // console.log(resp.data,'resp.data');
          let course = resp.data;
          this.name = course.data.name;
          this.image = course.data.img;
          this.description = course.data.description
          console.log(course.data)
        })
        .catch(error=>{
          console.log(error);
        })
    },
  },
  created(){
    this.getCourse();
  }
}
</script>

<style>

</style>