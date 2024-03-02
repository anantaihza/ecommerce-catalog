<template>
  <div id="app">
    <main :class="`background bg-${theme}-${gender}`">
      <CardProduct :product="product" :gender="gender" />
      <div :class="`background-bottom bg-${theme}`"></div>
    </main>
  </div>
</template>

<script>
import getProductAPI from '@/utils/network-data';
import CardProduct from './components/CardProduct.vue';

export default {
  name: 'App',
  components: {
    CardProduct,
  },
  data() {
    return {
      product_id: 1,
      product: {},
      gender: 'men',
      theme: 'light',
    };
  },
  mounted() {
    this.getProduct(this.product_id);
  },
  methods: {
    async getProduct(id) {
      const response = await getProductAPI(id);
      this.product = response;
    },
  },
};
</script>

<style src="@/assets/style/page.css"></style>
