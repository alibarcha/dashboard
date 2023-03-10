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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },

  },
  {
    path: '/userprofile',
    name: 'user Profile',
    component: UserProfile,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/regulartables',
    name: 'regular Tables',
    component: RegularTables,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/googlemaps',
    name: 'google Maps',
    component: GoogleMaps,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: UpgradeToPro,
    meta: {
      authRequired: true,
      layout: "UserLayout"
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },

  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    if (to.meta?.authRequired && !user) {
      next('/login')
    } else if (user && (to.name == "signup" || to.name == "login")) {
      next("/")
    } else {
      next()
    }
  });
});

export default router;
