<template>
    <button v-if="btnType === 'outline'"
      :class="`btn btn-${btnType}-${gender}`" @click="triggerNextProduct">
      <slot></slot>
    </button>
    <button v-else-if="btnType === 'solid'"
      :class="`btn btn-${btnType}-${gender}`" @click="triggerBuyNow">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'ButtonProduct',

  props: {
    btnType: {
      type: String,
      required: true,
      validator(value) {
        return ['solid', 'outline'].includes(value);
      },
    },
    product: {
      type: Object,
    },
    gender: {
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
    triggerNextProduct() {
      this.$emit('nextProductEvent');
    },
    triggerBuyNow() {
      this.$emit('buyNowEvent');
    },
  },
};
</script>

<style src="@/assets/style/components/category/button-product.css"></style>
