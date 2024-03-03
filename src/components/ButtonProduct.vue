<template>
  <button :class="`btn btn-${btnType}-${gender}`" @click="triggerNextProduct">
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
  },
};
</script>

<style src="@/assets/style/components/button-product.css"></style>
