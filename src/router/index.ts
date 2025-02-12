import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import SearchView from '../views/SearchView.vue'
import TradesView from '../views/TradesView.vue'
import BookView from '../views/BookView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/book/:isbn',
      name: 'book',
      props: true,
      component: BookView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/trades',
      name: 'trades',
      component: TradesView
    }
  ]
})

export default router
