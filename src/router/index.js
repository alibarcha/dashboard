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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/userprofile',
    name: 'user Profile',
    component: UserProfile
  },
  {
    path: '/regulartables',
    name: 'regular Tables',
    component: RegularTables
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
  {
    path: '/googlemaps',
    name: 'google Maps',
    component: GoogleMaps
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: UpgradeToPro
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
