import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import Register from "../views/admin/login_register/Register.vue"
import Login from "../views/admin/login_register/Login.vue"
import Sliders from '../views/admin/sliders/Sliders.vue'
import Categories from '../views/admin/categories/Index.vue'
import CreateCategory from '../views/admin/categories/Create.vue'
import EditCategory from '../views/admin/categories/Edit.vue'
import Contents from '../views/admin/contents/Index.vue'
import Customers from '../views/admin/Customers.vue'
import Roles from '../views/admin/Roles.vue'
import Messages from '../views/admin/Messages.vue'
import Comments from '../views/admin/Messages.vue'
import PublicView from '../views/PublicView.vue'
import ClientView from '../views/Index.vue'
import { useAuthStore } from '../../store/auth';
import JWTService from '../JWTService'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/register',
      name: "AdminRegister",
      component : Register
    },
    {
      path : '/admin/login',
      name : 'AdminLogin',
      component : Login
    },
    {
      path: '/',
      name: 'home',
      component: ClientView
    },
    {
      path: '/publicview',
      name: 'publicview',
      component: PublicView
    },

    {
      path:'/admin',
      name:'admin',
      component: AdminDashboard,
      meta: {
        middleware: "auth",
      },
      children:[
        {
          path:'sliders',
          name: 'sliders',
          component:Sliders,

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
    }

  ]
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  // alert(34);
  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    authStore.verifyAuth();
    if (authStore.authenicated) {
          next();
    } else {
      next('/');
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router
