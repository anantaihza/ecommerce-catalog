<template>
  <header :class="`color-${gender}`">
    <nav class="navbar">
      <div class="left-nav">
        <div class="brand">
          <h4>TokoIdea</h4>
        </div>
        <ul class="list-navigation">
          <li>
            <router-link to="/" :class="`btn-nav color-${gender}`">
              <i class="fa-solid fa-house"></i>
            </router-link>
          </li>
        </ul>
      </div>

      <ul class="list-navigation">
        <li>
          <button
            v-html="icon"
            :class="`btn-nav color-${gender}`"
            @click="triggerTheme"
          ></button>
        </li>
        <li>
          <router-link to="/cart" :class="`btn-nav color-${gender}`">
            <i class="fa-solid fa-cart-shopping"></i>
            <span v-if="totalCart" class="badge">{{ totalCart }}</span>
          </router-link>
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
    totalCart: {
      type: Number,
      required: true,
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
      icon: '<i class="navigation fa-regular fa-moon"></i>',
    };
  },

  methods: {
    triggerTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.icon = this.icon === '<i class="navigation fa-regular fa-moon"></i>'
        ? '<i class="navigation fa-regular fa-sun"></i>'
        : '<i class="navigation fa-regular fa-moon"></i>';

      this.$emit('themeEvent', newTheme);
    },
  },
};
</script>

<style src="@/assets/style/components/category/navbar-product.css"></style>
