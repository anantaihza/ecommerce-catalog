<template>
  <div class="ratings">
    <div class="rating-score">{{ rating }}/5</div>
    <div
      v-for="(star, index) in stars"
      :key="rating + star + index"
      :class="`rating-star color-${gender}`"
    >
      <i :class="`star ${star} fa-circle`"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingProduct',

  props: {
    rating: {
      type: Number,
      required: true,
    },
    stars: {
      type: Array,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="@/assets/style/components/category/rating-product.css"></style>
