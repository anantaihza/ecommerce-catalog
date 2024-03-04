<template>
  <div class="product-cart">
    <div class="image">
      <img src="https://picsum.photos/200" alt="">
    </div>
    <div class="title-price">
      <h4 class="title">Product dsfffd fsdfd sdfds s dsfffd</h4>
      <p class="category">men</p>
    </div>
    <div class="price">
      <p>$300</p>
    </div>
    <div class="quantity">
      <p>3</p>
    </div>
    <div class="delete-product">
      <button class="btn-delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcommerceProductCart',

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

<style src="@/assets/style/components/cart/product-cart.css"></style>
