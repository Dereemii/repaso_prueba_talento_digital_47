<template>
  <v-toolbar dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Administrador</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn depressed color="primary" @click="$router.push('/crear')">
      Crear nuevo curso
    </v-btn>

    <v-btn depressed color="default" @click="logout">
      Cerrar Sesión
    </v-btn>
  </v-toolbar>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Navbar-Admin",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(()=>{
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
