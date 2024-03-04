<template>
  <div class="container-description">
    <hr />
    <p class="description-content">
      {{ description }}
    </p>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'DescriptionProduct',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="@/assets/style/components/category/description-product.css"></style>
