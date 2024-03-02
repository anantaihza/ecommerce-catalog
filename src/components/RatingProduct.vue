<template>
  <div class="ratings">
    <div class="rating-score">{{ rating }}/5</div>
    <div :class="`rating-star color-${gender}`">
      <i v-for="rate in 5" :key="rate"
        class="star"
        :class="rate <= countStar ? 'fa-solid fa-circle' : 'fa-regular fa-circle'"></i>
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
    gender: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      countStar: 0,
    };
  },

  computed: {
    getStar() {
      return Math.floor(this.rating);
    },
  },
  mounted() {
    this.countStar = this.getStar;
  },
};
</script>

<style src="@/assets/style/components/rating-product.css"></style>
