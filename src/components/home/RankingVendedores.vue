<template>
  <div>
    <h2>Ranking de Vendedores</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              ID vendedor
            </th>
            <th class="text-left">
              Vendedor
            </th>
            <th class="text-left">
              Monto
            </th>
            <th class="text-left">
              Unidades
            </th>
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vendedor in ranking" :key="vendedor.id_vendedor">
            <td>{{ vendedor.id_vendedor }}</td>
            <td>{{ vendedor.nombre }}</td>
            <td>{{ vendedor.monto }}</td>
            <td>{{ vendedor.unidades }}</td>
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
  name: "RankingVendedores",
  // props: {},
  data: function() {
    return {
        ranking:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchRankingVendedores(){
      axios.get('http://localhost:8080/api/ranking_vendedores.json')
        .then(resp=>{
          console.log(resp)
          this.ranking = resp.data;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchRankingVendedores();
  }
  // components: {},
};
</script>

<style scoped></style>
