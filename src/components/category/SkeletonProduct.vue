<template>
  <div class="card-loading">
    <div class="container-loading">
      <div class="title-loading sm-content"></div>
      <div class="title-short-loading sm-content"></div>
      <div class="image-loading"></div>
      <div class="content-loading">
        <div class="title-loading lg-content"></div>
        <div class="title-short-loading lg-content"></div>
        <div class="category-rating-loading">
          <div class="category-loading"></div>
          <div class="rating-loading"></div>
        </div>
        <hr>
        <div class="container-desc-loading">
          <div class="description-loading"></div>
          <div class="description-loading"></div>
          <div class="description-loading"></div>
          <div class="description-loading"></div>
          <div class="description-loading"></div>
        </div>
        <hr>
        <div class="price-loading"></div>
        <div class="container-btn-loading">
          <div class="btn-loading"></div>
          <div class="btn-loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonProduct',
};
</script>

<style src="@/assets/style/components/category/skeleton-product.css"></style>
