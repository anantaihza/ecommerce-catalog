<template>
  <div class="category-view">
    <NavbarProduct :gender="gender" :theme="theme"
      :totalCart="totalCart" @themeEvent="setTheme" />
    <main :class="`background bg-${theme}-${gender}`">
      <CardProduct
        :product="product"
        :totalProduct="totalProduct"
        :gender="gender" :isLoading="isLoading"
        @nextProductEvent="nextProduct"
        @buyNowEvent="addProductToCart" />
      <div :class="`background-bottom bg-${theme}`"></div>
    </main>
  </div>
</template>

<script>
import { getAllProductAPI, getProductAPI } from '@/utils/network-data';
import CardProduct from '@/components/category/CardProduct.vue';
import NavbarProduct from '@/components/category/NavbarProduct.vue';

export default {
  name: 'App',
  components: {
    NavbarProduct,
    CardProduct,
  },
  data() {
    return {
      product: {},
      product_id: 1,
      gender: localStorage.getItem('gender') || 'other',
      theme: localStorage.getItem('theme') || 'light',
      isLoading: true,
      totalProduct: 0,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  },
  mounted() {
    this.getProduct(this.product_id);
    this.getAllProduct();
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
    async getProduct(id) {
      const response = await getProductAPI(id);
      this.product = response;

      const { category } = this.product;
      if (category === 'men\'s clothing') {
        this.setGender('men');
      } else if (category === 'women\'s clothing') {
        this.setGender('women');
      } else {
        this.setGender('other');
      }

      this.product.stars = this.getStar();
      this.isLoading = false;
    },
    async getAllProduct() {
      const response = await getAllProductAPI();
      this.totalProduct = response.length;
    },
    getStar() {
      const star = [];
      const solidStar = Math.floor(this.product.rating.rate);
      const outlineStar = 5 - solidStar;
      for (let i = 0; i < solidStar; i += 1) {
        star.push('fa-solid');
      }
      if (solidStar < 5) {
        for (let i = 0; i < outlineStar; i += 1) {
          star.push('fa-regular');
        }
      }
      return star;
    },
    setGender(gender) {
      this.gender = gender;
      localStorage.setItem('gender', gender);
    },
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem('theme', theme);
    },
    nextProduct() {
      this.isLoading = true;
      this.setGender('other');

      if (this.product_id === 20) {
        this.product_id = 1;
      } else {
        this.product_id += 1;
      }
      this.getProduct(this.product_id);
    },
    addProductToCart() {
      this.cart.push(this.product);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
};
</script>

<style src="@/assets/style/category-page.css"></style>
