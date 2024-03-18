import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import mainpageView from '../views/mainpageView.vue'
import WeeklyRevenue from '../views/WeeklyRevenue.vue'
import CheckTable from '../views/CheckTable.vue'
import DailyTrafficChart from '../views/DailyTrafficChart.vue'
import MainTabl from '../views/MainTabl.vue'
import totalEarning from '../views/totalEarning.vue'

const routes = [
  {
    path: '/',
    redirect : '/mainpageView',
   
  },
  {
    path: '/mainpageView',
    name: 'mainpageView',
    component: mainpageView
  },
  {
    path: '/weekly_evenue',
    name: 'WeeklyRevenue',
    component: WeeklyRevenue
  },
  {
    path: '/total_earning',
    name: 'totalEarning',
    component: totalEarning
  },
  {
    path: '/main_tabl',
    name: 'MainTabl',
    component: MainTabl
  },
  {
    path: '/checktable',
    name: 'CheckTable',
    component: CheckTable
  },
  {
    path: '/daily_traffic_chart',
    name: 'DailyTrafficChart',
    component: DailyTrafficChart
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
