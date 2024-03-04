<template>
  <div class="container-product-img">
    <img class="product-img" :src="image" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'ImageProduct',
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
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

<style src="@/assets/style/components/category/image-product.css"></style>
