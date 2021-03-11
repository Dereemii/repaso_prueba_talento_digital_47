<template>
  <div class="grilla">
    <div class="labels">Id Vendedor</div>
    <div class="labels">{{vendedor.id}}</div>
    <div class="labels">Nombre</div>
    <div class="labels">{{vendedor.nombre}}</div>
    <div class="labels">Email</div>
    <div class="labels">{{vendedor.email}}</div>
    <div class="labels">Telefono</div>
    <div class="labels">{{vendedor.fono}}</div>
    <div class="labels">Oficina</div>
    <div class="labels">{{vendedor.oficina}}</div>
    <div class="labels">Manager</div>
    <div class="labels">{{vendedor.Manager}}</div>
  </div>
</template>

<script>
export default {
  name: 'General-vendedor',
  props: {
    vendedor:{
      type: Object,
      required: true,
    },
  },
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
  .grilla{
    display:grid;
    grid-template-columns: .5fr 2fr;
    margin-top:20px;
  }
  .labels{
    color:rgb(71, 71, 71);
    padding: 8px;
    font-size: 1.1rem;
  }
</style>