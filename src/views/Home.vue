<template>
  <div>
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
          <VentaMensual></VentaMensual>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbo from '@/components/home/Jumbo.vue'
import VentaMensual from '@/components/home/VentaMensual.vue'
export default {
  name: 'Home',
  components: {
    Jumbo,
    VentaMensual,
  }
}
</script>
