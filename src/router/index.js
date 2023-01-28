import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import UserProfile from '../views/UserProfile'
import RegularTables from '../views/RegularTables'
import Typography from '../views/Typography'
import Icons from '../views/Icons'
import GoogleMaps from '../views/GoogleMaps'
import Notifications from '../views/Notifications'
import UpgradeToPro from '../views/UpgradeToPro'

import Signup from '../views/Signup'
import Login from '../views/Login'

import { auth } from "@/firebaseConfig";

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      authRequired: true,
    },

  },
  {
    path: '/userprofile',
    name: 'user Profile',
    component: UserProfile,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/regulartables',
    name: 'regular Tables',
    component: RegularTables,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/googlemaps',
    name: 'google Maps',
    component: GoogleMaps,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: UpgradeToPro,
    meta: {
      authRequired: true,
    },
  },
  {
    path:'/signup',
    name:'signup',
    component :Signup
  },


  {
    path:'*',
    redirect:'/login'
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // const currentUser=auth.currentUser;
  // const requiresAuth=to.matched.some(record=> record.meta.requiresAuth);
  // if(requiresAuth && currentUser) next('login')
  // else if(!requiresAuth && currentUser) next('dashboard')
  // else next();


  if(to.matched.some((record)=>record.meta.authRequired)){
    if(auth.currentUser){
      next();
    }else{
      alert('You do not Login ? Please Login & Use')
      router.push('/login')
    }
  }else{
    next();
  }
});

export default router;
