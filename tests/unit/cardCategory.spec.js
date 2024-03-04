import { shallowMount } from '@vue/test-utils';
import CardProduct from '@/components/category/CardProduct.vue';

describe('CardProduct', () => {
  it('renders loading skeleton when isLoading is true', () => {
    const product = {
      title: 'Product Title',
      image: 'product-image.jpg',
      category: 'men\'s clothing',
      rating: { rate: 4 },
      stars: ['fa-solid', 'fa-solid', 'fa-solid', 'fa-solid', 'fa-regular'],
      description: 'Product Description',
      price: 50,
    };
    const wrapper = shallowMount(CardProduct, {
      propsData: {
        isLoading: true,
        product,
        gender: 'men',
        totalProduct: 10,
      },
    });

    expect(wrapper.findComponent({ name: 'SkeletonProduct' }).exists()).toBe(true);
    expect(wrapper.find('.card').exists()).toBe(false);
    expect(wrapper.find('.card-other').exists()).toBe(false);
  });

  it('renders product card when isLoading is false and product is available for men or women category', () => {
    const product = {
      title: 'Product Title',
      image: 'product-image.jpg',
      category: 'men\'s clothing',
      rating: { rate: 4 },
      stars: ['fa-solid', 'fa-solid', 'fa-solid', 'fa-regular', 'fa-regular'],
      description: 'Product Description',
      price: 50,
    };

    const wrapper = shallowMount(CardProduct, {
      propsData: {
        isLoading: false,
        product,
        gender: 'men',
        totalProduct: 10,
      },
    });

    expect(wrapper.findComponent({ name: 'SkeletonProduct' }).exists()).toBe(false);
    expect(wrapper.find('.card').exists()).toBe(true);
    expect(wrapper.find('.card-other').exists()).toBe(false);
    // Add more expectations for rendering product card elements
  });

  it('renders unavailable product card when isLoading is false and product is not available for men or women category', () => {
    const product = {
      title: 'Product Title',
      category: 'electronics', // Example category not men's or women's clothing
    };

    const wrapper = shallowMount(CardProduct, {
      propsData: {
        isLoading: false,
        product,
        gender: 'men',
        totalProduct: 10,
      },
    });

    expect(wrapper.findComponent({ name: 'SkeletonProduct' }).exists()).toBe(false);
    expect(wrapper.find('.card').exists()).toBe(false);
    expect(wrapper.find('.card-other').exists()).toBe(true);
    // Add more expectations for rendering unavailable product card elements
  });
});
