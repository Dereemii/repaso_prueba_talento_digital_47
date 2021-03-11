<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <h3>home</h3>
    <v-container>
      <v-row>
        <v-col>
          <Jumbo></Jumbo>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <VentaMensual></VentaMensual>
        </v-col>
        <v-col>
          <VentaAnual></VentaAnual>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <RankingVendedores></RankingVendedores>
        </v-col>
        <v-col>
          <RankingProductos></RankingProductos>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbo from '@/components/home/Jumbo.vue'
import VentaMensual from '@/components/home/VentaMensual.vue'
import VentaAnual from '@/components/home/VentaAnual.vue'
import RankingVendedores from '@/components/home/RankingVendedores.vue'
import RankingProductos from '@/components/home/RankingProductos.vue'
import NavBarAdmin from '@/components/AdminNavbar.vue'
export default {
  name: 'Home',
  components: {
    Jumbo,
    VentaMensual,
    VentaAnual,
    RankingVendedores,
    RankingProductos,
    NavBarAdmin,
  }
}
</script>
