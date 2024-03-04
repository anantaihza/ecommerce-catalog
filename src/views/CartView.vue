<template>
  <div :class="`cart-view bg-${theme}-${gender}`">
    <NavbarProduct :gender="gender" :theme="theme" @themeEvent="setTheme" />
    <CardCart />
  </div>
</template>

<script>
import NavbarProduct from '@/components/category/NavbarProduct.vue';

import CardCart from '@/components/cart/CardCart.vue';

export default {
  name: 'CartView',

  components: {
    NavbarProduct,
    CardCart,
  },

  data() {
    return {
      theme: localStorage.getItem('theme') || 'light',
      gender: localStorage.getItem('gender') || 'other',
    };
  },

  mounted() {

  },

  methods: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem('theme', theme);
    },
  },
};
</script>

<style src="@/assets/style/cart-page.css"></style>
