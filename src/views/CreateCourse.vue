<template>
  <div>
    <NavbarAdmin></NavbarAdmin>
    <h1>Crear nuevo Curso</h1>
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

              <v-btn color="success" class="mr-4" @click="createCourse">Crear</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarAdmin from '@/components/AdminNavbar.vue'
import {mapActions} from 'vuex'
export default {
  name:"createCourseComponent",
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
    ...mapActions(['getCourses']),
    createCourse(){
      if(!this.$refs.form.validate()) return 

      let data = {
        name: this.name,
        img : this.image,
        description: this.description
      }

      axios.post("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses", data)
        .then(resp=>{
          console.log(resp);
          this.getCourses();
          this.$router.push('/admin')
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  
}
</script>

<style>

</style>