<template>
  <div class="product-cart">
    <div class="image">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="title-price">
      <h4 class="title">{{ product.title }}</h4>
      <p class="category">{{ product.category }}</p>
    </div>
    <div class="price">
      <p>${{ product.price }}</p>
    </div>
    <div class="quantity">
      <p>{{ quantity }}</p>
    </div>
    <div class="delete-product">
      <button class="btn-delete" @click="triggerDeleteCartId">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',

  props: {
    product: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },

  methods: {
    triggerDeleteCartId() {
      this.$emit('deteleCartIdEvent', this.product.id);
    },
  },
};

</script>

<style src="@/assets/style/components/cart/product-cart.css"></style>
