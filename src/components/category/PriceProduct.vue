<template>
  <div :class="`price-product color-${gender}`">
    <h3>${{ price }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PriceProduct',
  props: {
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="@/assets/style/components/category/price-product.css"></style>
