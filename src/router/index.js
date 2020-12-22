import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import Course from '@/views/Course.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import UpdateCourse from '@/views/UpdateCourse.vue'
import CreateCourse from '@/views/CreateCourse.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/curso/:id',
    name:"Course",
    component: Course,
    props:true,

  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/admin',
    name: "Admin",
    component: Admin,
    meta:{
      autenticado:true,
    }
  },
  {
    path: '/admin/curso/:id',
    name: "Update",
    component:UpdateCourse,
    meta:{
      autenticado:true
    }
  },
  {
    path:'/crear',
    name: "CreateCourse",
    component: CreateCourse,
    meta:{
      autenticado:true
    }
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
  let user = firebase.auth().currentUser;
  console.log(to)
  let private_rute = to.matched.some(record=> record.meta.autenticado)

  if(private_rute && !user){
    next('/login')
  }
  else if(!private_rute && user){
    next('/admin')
  }
  else{
    next();
  }
})

export default router
