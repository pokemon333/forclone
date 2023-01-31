import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import Sliders from '../views/admin/sliders/Sliders.vue'
import Categories from '../views/admin/categories/Categories.vue'
import Contents from '../views/admin/contents/Contents.vue'
import Customers from '../views/admin/Customers.vue'
import Roles from '../views/admin/Roles.vue'
import Messages from '../views/admin/Messages.vue'
import Comments from '../views/admin/Messages.vue'
import CreateSlider from '../views/admin/sliders/create.vue'
import PublicView from '../views/PublicView.vue'
import ClientView from '../views/client/ClientView.vue'
import { useAuthStore } from '../../store/auth';
import JWTService from '../JWTService'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/slidersCreate',
      name: 'slidersCreate',
      component: CreateSlider
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
          children:[
            {
              path:'create',
              component:CreateSlider,
            }
          ]
        },
        {
          path:'categories',
          name: 'categories',
          component:Categories,
          children:[
            // {
            //   path:'show',
            //   component:ShowCategory
            // }
          ]
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
