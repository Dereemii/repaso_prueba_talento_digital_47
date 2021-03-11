<template>
  <v-container>
    <v-row>
      <v-col class="contenedor" md="12">
        <div class="jumbo">
          <h2>Vitrina</h2>
        </div>
        <div>
          <h2>Bienvenido</h2>
          <p>Bienvenido al sistema de gestión de worldparts</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'jumbo-component',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    // -- Metodos
  },
  // components: {},
}
</script>

<style scoped>
  .jumbo{
    height: 200px;
    background: grey;
    color: white;
    text-align:center;
    padding-top:80px;
  }
  .contenedor{
    border: 1px solid grey;
    padding: 5px;
  }
</style>