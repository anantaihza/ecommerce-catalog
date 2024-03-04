<template>
  <div :class="`cart-view bg-${theme}-${gender}`">
    <NavbarProduct :gender="gender" :theme="theme" :totalCart="totalCart" @themeEvent="setTheme" />
    <CardCart :cart="cart" @deteleCartIdEvent="deteleCartId" />
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
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  },

  mounted() {

  },

  computed: {
    totalCart() {
      if (this.cart.length === 0) {
        return 0;
      }
      return this.cart.length;
    },
  },

  methods: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem('theme', theme);
    },
    deteleCartId(id) {
      const newCart = this.cart.filter((product) => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
    },
  },
};
</script>

<style src="@/assets/style/cart-page.css"></style>
