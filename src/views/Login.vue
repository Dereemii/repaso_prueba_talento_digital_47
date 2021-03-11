<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6">
        <h1>Login</h1>
        <h2>user: user@user.cl</h2>
        <h2>pass: 123456</h2>
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
        
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>

           <v-text-field
            v-model="pass"
            :rules="[(v) => !!v || 'Contraseña requerida']"
            label="Contraseña"
            type="password"
            required
          ></v-text-field>

      

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Ingresar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Limpiar
          </v-btn>

        </v-form><br>
        <v-spacer></v-spacer>
        <v-alert v-if="!userFind" type="warning">
          No estas registrado en el sistema
        </v-alert>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  name: "LoginComponent",
  data: function(){
    return{
      valid: true,
      email:"",
      pass: "",
      emailRules: [
        v => !!v || 'Correo requerido',
        v => /.+@.+\..+/.test(v) || 'Correo no valido',
      ],
      userFind:true,
    }
  },
  methods:{
    ...mapActions(['setUserData']),
    validate () {
        return this.$refs.form.validate()
    },
    reset () {
        this.$refs.form.reset()
    },
    submit(){
      //guardia
      if(this.validate() === false) return

      axios.get('http://localhost:8080/api/login.json')
        .then(resp=>{
          console.log(resp.data)
          let user = resp.data;
          if(user.email == this.email && user.pass == this.pass){
            this.setUserData(user);
            this.$router.push('/');
            this.userFind = true;
          }
          else{
            this.userFind = false;
          }
        })
        .catch(error=>{
          console.log(error)
        })
      
    }
  }
};
</script>

<style></style>
