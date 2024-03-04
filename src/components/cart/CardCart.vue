<template>
  <div>
    <div class="card-cart">
      <div class="header-card">
        <h2>Shopping Cart</h2>
      </div>
      <div class="content-card"
        >
        <ProductCart v-for="(groupedProducts, id) in groupedProductsWithQuantities" :key="id"
          :product="groupedProducts[0]"
          :quantity="groupedProducts.length"
          @deteleCartIdEvent="triggerDeleteCartId" />
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
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {

    };
  },

  computed: {
    groupedProductsWithQuantities() {
      const groupedProducts = {};
      this.cart.forEach((product) => {
        if (!groupedProducts[product.id]) {
          groupedProducts[product.id] = [];
        }
        groupedProducts[product.id].push(product);
      });
      return groupedProducts;
    },
  },

  mounted() {

  },

  methods: {
    // deteleCartId(id) {
    //   const newCart = this.cart.filter((product) => product.id !== id);
    //   localStorage.setItem('cart', JSON.stringify(newCart));
    // },
    triggerDeleteCartId(id) {
      this.$emit('deteleCartIdEvent', id);
    },
  },
};
</script>

<style scoped></style>
