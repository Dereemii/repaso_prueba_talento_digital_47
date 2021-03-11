<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Periodo
          </th>
          <th class="text-left">
            Venta unid
          </th>
          <th class="text-left">
            Venta Pesos
          </th>
          <th class="text-left">
            Meta periodo
          </th>
          <th class="text-left">
            Cumplimiento
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cumplimiento in cumplimientos"
          :key="cumplimiento.periodo"
        >
          <td>{{ cumplimiento.periodo }}</td>
          <td>{{ cumplimiento.venta_unidades }}</td>
          <td>{{ cumplimiento.venta_pesos }}</td>
          <td>{{ cumplimiento.meta }}</td>
          <td>
            <v-progress-linear :value="porcentaje(cumplimiento.venta_pesos, cumplimiento.meta)" color="blue-grey" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'component-name',
  props: {
    cumplimientos:{
      type: Array,
      required: true,
    },
  },
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    // -- Metodos
    porcentaje(venta, meta){
      return (venta*100)/meta;
    }
  },
  // components: {},
}
</script>

<style scoped>
  
</style>