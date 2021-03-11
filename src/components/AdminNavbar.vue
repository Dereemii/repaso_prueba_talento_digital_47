<template>
  <v-toolbar dense :dark="true">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Company</v-toolbar-title>
    <v-btn depressed color="default" @click="$router.push('/')">
      Home
    </v-btn>
    <v-btn depressed color="default" @click="$router.push('/vendedores')">
      Vendedores
    </v-btn>
    <v-btn depressed color="default" @click="$router.push('/')">
      Pedidos
    </v-btn>
    <v-spacer></v-spacer>

    

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
