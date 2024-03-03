<template>
  <div>
    <h1 :class="`title-content ${display}-content color-${gender}`">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleProduct',
  props: {
    title: {
      type: String,
      required: true,
    },
    display: {
      type: String,
      validator(value) {
        return ['sm', 'lg'].includes(value);
      },
    },
    gender: {
      type: String,
      required: true,
    },
  },
};
</script>

<style src="@/assets/style/components/title-product.css"></style>
