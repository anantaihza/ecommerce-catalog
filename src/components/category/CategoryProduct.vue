<template>
  <div class="category">
    <p>{{ category }}</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryProduct',

  props: {
    category: {
      type: String,
      required: true,
    },
  },
};

</script>

<style src="@/assets/style/components/category/category-product.css"></style>
