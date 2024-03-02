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

<style src="@/assets/style/components/category-product.css"></style>
