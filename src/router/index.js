import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import Sliders from '../views/admin/sliders/Sliders.vue'
import Categories from '../views/admin/categories/Categories.vue'
import CreateCategory from '../views/admin/categories/CreateCategory.vue'
import EditCategory from '../views/admin/categories/EditCategory.vue'
import Contents from '../views/admin/contents/Contents.vue'
import Customers from '../views/admin/Customers.vue'
import Roles from '../views/admin/Roles.vue'
import Messages from '../views/admin/Messages.vue'
import Comments from '../views/admin/Messages.vue'
import ClientVIew from '../views/client/ClientView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientVIew
    },
    {
      path:'/admin',
      name:'admin',
      component: AdminDashboard,
      children:[
        {
          path:'sliders',
          name: 'sliders',
          component:Sliders
        },
        {
          path:'categories',
          name: 'categories',
          component:Categories,
        },
        {
          path:'category/create',
          name: 'CreateCategory',
          component: CreateCategory
        },
        {
          path:'category/:slug',
          name:'EditCategory',
          component: EditCategory,
          props : true
        },
        {
          path:'contents',
          name: 'contents',
          component:Contents
        },
        {
          path:'customers',
          name: 'customers',
          component:Customers
        },
        {
          path:'roles',
          name: 'roles',
          component:Roles
        },
        {
          path:'messages',
          name: 'messages',
          component:Messages
        },
        {
          path:'comments',
          component:Comments
        },
      ]
    },
    {
      path: '/client',
      name:'ClientView',
      component: ClientVIew
    }

  ]
})

export default router
