<template>
  <div class="container-card">
    <SkeletonProduct v-if="isLoading" />
    <div v-if="isCategoryMenOrWomen && !isLoading" class="card">
      <TitleProduct :title="product.title" display="sm" :gender="gender" />
      <ImageProduct :image="product.image" :alt="product.title" />
      <div class="container-product-content">
        <TitleProduct :title="product.title" display="lg" :gender="gender" />
        <div class="container-category-rating">
          <CategoryProduct :category="product.category" />
          <RatingProduct :rating="product.rating.rate" :stars="product.stars" :gender="gender" />
        </div>
        <DescriptionProduct :description="product.description" />
        <PriceProduct :price="product.price" :gender="gender" />
        <div class="container-btn">
          <ButtonProduct btnType="solid" :gender="gender">Buy Now</ButtonProduct>
          <ButtonProduct btnType="outline" :gender="gender" @nextProductEvent="triggerNextProduct">
            Next Product
          </ButtonProduct>
        </div>
      </div>
    </div>
    <div v-else-if="isCategoryOther && !isLoading" class="card-other">
      <div class="card-other-content">
        <TitleProduct title="Product" :gender="gender" />
        <TitleProduct :title="`${product.id} / ${totalProduct}`" :gender="gender" />
        <br><br>
        <p>This product is unavailable to show</p>
        <ButtonProduct btnType="outline" :gender="gender" @nextProductEvent="triggerNextProduct">
          Next Product
        </ButtonProduct>
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
import SkeletonProduct from './SkeletonProduct.vue';

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
    SkeletonProduct,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    totalProduct: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      validator(value) {
        return ['women', 'men', 'other'].includes(value);
      },
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    triggerNextProduct() {
      this.$emit('nextProductEvent');
    },
  },
  computed: {
    isCategoryMenOrWomen() {
      return this.product.category === 'men\'s clothing' || this.product.category === 'women\'s clothing';
    },
    isCategoryOther() {
      return this.product.category !== 'men\'s clothing' || this.product.category !== 'women\'s clothing';
    },
  },
};
</script>

<style src="@/assets/style/components/category/card-product.css"></style>
