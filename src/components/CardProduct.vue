<template>
  <div class="card">
    <TitleProduct :title="product.title" display="sm" :gender="gender" />
    <ImageProduct :image="product.image" :alt="product.title" />
    <div class="container-product-content">
      <TitleProduct :title="product.title" display="lg" :gender="gender" />
      <div class="container-category-rating">
        <CategoryProduct :category="product.category" />
        <RatingProduct :rating="product.rating.rate" :gender="gender" />
      </div>
      <DescriptionProduct :description="product.description" />
      <PriceProduct :price="product.price" :gender="gender" />
      <div class="container-btn">
        <ButtonProduct btnType="solid" :gender="gender">Buy Now</ButtonProduct>
        <ButtonProduct btnType="outline" :gender="gender">Next Product</ButtonProduct>
      </div>
    </div>
  </div>
</template>

<script>

import ImageProduct from './ImageProduct.vue';
import TitleProduct from './TitleProduct.vue';
import PriceProduct from './PriceProduct.vue';
import RatingProduct from './RatingProduct.vue';
import ButtonProduct from './ButtonProduct.vue';
import CategoryProduct from './CategoryProduct.vue';
import DescriptionProduct from './DescriptionProduct.vue';

export default {
  name: 'CardProduct',
  components: {
    TitleProduct,
    ImageProduct,
    CategoryProduct,
    RatingProduct,
    DescriptionProduct,
    PriceProduct,
    ButtonProduct,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      validator(value) {
        return ['women', 'men', 'other'].includes(value);
      },
    },
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

<style src="@/assets/style/components/card-product.css"></style>
