import Vue from 'vue';
import VueRouter from 'vue-router';
import CartView from '../views/CartView.vue';
import CategoryView from '../views/CategoryView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: CategoryView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
