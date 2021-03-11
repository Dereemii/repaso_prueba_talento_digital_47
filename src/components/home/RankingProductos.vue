<template>
  <div>
    <h2>Ranking de Productos</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
             Cod Producto
            </th>
            <th class="text-left">
              Producto
            </th>
            <th class="text-left">
              Unidades
            </th>
          
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in ranking" :key="producto.id_producto">
            <td>{{ producto.cod_producto }}</td>
            <td>{{ producto.producto }}</td>
            <td>{{ producto.unidades }}</td>
            <td><v-btn x-small color="info">Ver detalles</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RankingProductos",
  // props: {},
  data: function() {
    return {
        ranking:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchRankingProductos(){
      axios.get('http://localhost:8080/api/ranking_productos.json')
        .then(resp=>{
          
          this.ranking = resp.data;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchRankingProductos();
  }
  // components: {},
};
</script>

<style scoped></style>
