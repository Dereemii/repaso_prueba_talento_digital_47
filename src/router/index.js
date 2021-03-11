import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Vendedores from '@/views/Vendedores.vue'
import Vendedor from '@/views/Vendedor.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      autenticado:true
    }
  },
  {
    path: '/vendedores',
    name: 'Vendedores',
    component: Vendedores,
    meta:{
      autenticado:true
    }
  },
  {
    path: '/vendedor/:id',
    name: 'Vendedores',
    component: Vendedor,
    props:true,
    meta:{
      autenticado:true
    }
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let user = store.state.token;
  console.log(to)
  let private_rute = to.matched.some(record=> record.meta.autenticado)

  if(private_rute && !user){
    next('/login')
  }
  else if(!private_rute && user){
    next('/')
  }
  else{
    next();
  }
})

export default router
