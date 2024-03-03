<template>
  <header :class="`color-${gender}`">
    <nav class="navbar">
      <div class="brand">
        <h4>TokoIdea</h4>
      </div>

      <ul class="list-navigation">
        <li class="navigation">
          <button v-html="icon" :class="`btn-nav color-${gender}`" @click="triggerTheme"></button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarProduct',
  props: {
    gender: {
      type: String,
      required: true,
      validator(value) {
        return ['men', 'women', 'other'].includes(value);
      },
    },
    theme: {
      type: String,
      required: true,
      validator(value) {
        return ['light', 'dark'].includes(value);
      },
    },
  },

  data() {
    return {
      icon: '<i class="fa-regular fa-moon"></i>',
    };
  },

  methods: {
    triggerTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.icon = this.icon === '<i class="fa-regular fa-moon"></i>'
        ? '<i class="fa-regular fa-sun"></i>'
        : '<i class="fa-regular fa-moon"></i>';

      this.$emit('themeEvent', newTheme);
    },

  },
};
</script>

<style src="@/assets/style/components/navbar-product.css"></style>
