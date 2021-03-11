<template>
  <div>
    <NavBarAdmin></NavBarAdmin>
    <v-container>
      <h2>Ficha Vendedor</h2>
      <v-row>
        <v-col :md="8">
          <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <v-tab>
              General
            </v-tab>
            <v-tab>
              Cartera clientes
            </v-tab>
            <v-tab>
              Cumplimiento
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <General :vendedor="general"></General>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <Cartera :cartera="cartera"></Cartera>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <Cumplimiento :cumplimientos="cumplimientos"></Cumplimiento>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import General from '@/components/vendedor/General.vue'
import Cartera from '@/components/vendedor/Cartera.vue'
import Cumplimiento from '@/components/vendedor/Cumplimiento.vue'
import NavBarAdmin from '@/components/AdminNavbar.vue'
import axios from 'axios';
export default {
  name: "Vendedor",
  props: ["id"],
  data: function() {
    return {
      tab: null,
      general:{},
      cartera:[],
      cumplimientos:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchInfoEmpleado(){
      axios.get('http://localhost:8080/api/vendedor.json')
        .then(resp=>{
          console.log(resp)
          this.general = resp.data.vendedor;
          this.cartera = resp.data.cartera;
          this.cumplimientos = resp.data.cumplimiento;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  components: {
    General,
    Cartera,
    Cumplimiento,
    NavBarAdmin,
  },
  created(){
    this.fetchInfoEmpleado();
  }
};
</script>

<style scoped></style>
