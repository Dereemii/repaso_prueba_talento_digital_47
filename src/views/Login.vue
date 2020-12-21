<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6">
        <h1>Login</h1>
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
import firebase from 'firebase';
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
    validate () {
        return this.$refs.form.validate()
    },
    reset () {
        this.$refs.form.reset()
    },
    submit(){
      //guardia
      if(this.validate() === false) return

      firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
        .then(resp=>{
          console.log(resp)
          this.$router.push('/admin');
        })
        .catch(error=>{
          console.log(error)
          this.userFind = false;
        })

      
    }
  }
};
</script>

<style></style>
