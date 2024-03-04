<template>
  <div>
    <div class="card-cart">
      <div class="header-card">
        <h2>Shopping Cart</h2>
      </div>
      <div class="content-card">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div class="footer-card"></div>
    </div>
  </div>
</template>

<script>
import ProductCart from '@/components/cart/ProductCart.vue';

export default {
  name: 'CardCart',
  components: {
    ProductCart,
  },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped></style>
