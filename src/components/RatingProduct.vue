<template>
  <div class="ratings">
    <div class="rating-score">{{ rating }}/5</div>
    <div v-for="star in stars" :key="rating + star" :class="`rating-star color-${gender}`">
      <i :class="`star ${star}`"></i>
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

<style src="@/assets/style/components/rating-product.css"></style>
