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
            @click="validate"
          >
            Ingresar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Limpiar
          </v-btn>

        </v-form>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    }
  },
  methods:{
    validate () {
        this.$refs.form.validate()
      },
  }
};
</script>

<style></style>
