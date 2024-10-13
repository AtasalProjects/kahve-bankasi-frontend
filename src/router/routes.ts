import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/about',
    component: () => import('layouts/NavbarFooterLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },
  {
    path: '/locations',
    component: () => import('layouts/NavbarFooterLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LocationsPage.vue') },
    ],
  },
  {
    path: '/contact',
    component: () => import('layouts/NavbarFooterLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  {
    path: '/shop',
    component: () => import('layouts/NavbarFooterLayout.vue'),
    children: [
      { path: 'coffee', component: () => import('pages/shop/CoffeePage.vue') },
      {
        path: 'all-products',
        component: () => import('pages/shop/AllProductsPage.vue'),
      },
    ],
  },
  {
    path: '/products',
    component: () => import('layouts/NavbarFooterLayout.vue'),
    children: [
      {
        path: ':slug',
        component: () => import('pages/products/CoffeePage.vue'),
      },
    ],
  },
  // 404 Not Found Page
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
