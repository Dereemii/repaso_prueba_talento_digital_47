<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <v-container>
      <h1>Monitor de Vendedores</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Id Vendedor
              </th>
              <th class="text-left">
                Vendedor
              </th>
              <th class="text-left">
                Venta unidades
              </th>
              <th class="text-left">
                Venta pesos
              </th>
              <th class="text-left">
                Monto venta
              </th>
              <th class="text-left">
                Cumplimiento meta
              </th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vendedor in vendedores" :key="vendedor.id_vendedor">
              <td>{{ vendedor.id_vendedor }}</td>
              <td>{{ vendedor.nombre }}</td>
              <td>{{ vendedor.venta_unid }}</td>
              <td>{{ vendedor.venta_pesos }}</td>
              <td>{{ vendedor.meta_venta }}</td>
              <td>
                <v-progress-linear
                  :value="porcentaje(vendedor.venta_pesos, vendedor.meta_venta)"
                  color="blue-grey"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </td>
              <td>
                <v-btn
                  x-small
                  color="info"
                  @click="redirect(vendedor.id_vendedor)"
                  >Ver detalle</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
      v-model="page"
      :length="total_page"
    ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NavBarAdmin from '@/components/AdminNavbar.vue'
export default {
  name: "Vendedores",
  // props: {},
  data: function() {
    return {
      vendedores: [],
      page: 1,
      total_page: 1,
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchVendedores() {
      axios
        .get("http://localhost:8080/api/vendedores.json")
        .then((resp) => {
          console.log(resp);
          this.vendedores = resp.data.vendedores;
          this.page = resp.data.pagedResult.page;
          this.total_page = resp.data.pagedResult.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    porcentaje(venta, meta) {
      return (venta * 100) / meta;
    },
    redirect(id){
      this.$router.push(`/vendedor/${id}`)
    }
  },
  components: {
    NavBarAdmin,
  },
  created() {
    this.fetchVendedores();
  },
};
</script>

<style scoped></style>
