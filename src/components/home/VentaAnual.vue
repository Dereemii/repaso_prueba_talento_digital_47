<template>
  <v-container class="contenido">
    <v-row>
      <v-col>
        <h3 class="titulo">Venta Anual</h3>
      </v-col>
    </v-row>
    <v-row class="informacion">
      <v-col>
        <div class="valor">{{porcentaje}}%</div>
        <div class="detalle_valor"><a href="">Ver detalles</a></div>
      </v-col>
      <v-col>
        <div class="valor">{{valor}}</div>
        <div class="detalle_valor">Venta del anual</div>
      </v-col>
      <v-col>
        <div class="valor">{{meta}}</div>
        <div class="detalle_valor">Meta de ventas del año</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'venta-mensual',
  // props: {},
  data: function(){
    return {
      valor:0,
      meta:0,
    }
  },
  computed: {
    porcentaje(){
      let resultado = 0;
      if(this.meta>0){
        resultado = (this.valor * 100) / this.meta;
      }
      return resultado.toFixed(0);
    }
  },
  methods: {
    // -- Metodos
    fetchVentas(){
      axios.get('http://localhost:8080/api/kpis.json')
        .then(resp=>{
          console.log(resp.data[1].venta_anual);
          let venta = resp.data[1].venta_anual;
          this.valor = venta.valor;
          this.meta = venta.meta;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchVentas();
  }
  // components: {},
}
</script>

<style scoped>
  .titulo{
    text-align:center;
    font-weight: bolder;
  }
  .informacion{
    padding: 0 30px;
  }
  .valor{
    text-align: center;
    font-size:20px;
  }
  .detalle_valor{
    text-align: center;
    font-weight: bolder;
  }
  .contenido{
    border: 1px solid grey; 
  }
</style>