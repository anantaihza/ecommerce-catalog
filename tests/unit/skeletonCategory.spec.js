import { shallowMount } from '@vue/test-utils';
import SkeletonProduct from '@/components/category/SkeletonProduct.vue';

describe('SkeletonProduct', () => {
  it('renders skeleton product correctly', () => {
    const wrapper = shallowMount(SkeletonProduct);

    // Check if the skeleton product container is rendered
    expect(wrapper.find('.card-loading').exists()).toBe(true);
    expect(wrapper.find('.container-loading').exists()).toBe(true);

    // Check if individual loading elements are rendered with correct classes
    expect(wrapper.find('.title-loading.sm-content').exists()).toBe(true);
    expect(wrapper.find('.title-short-loading.sm-content').exists()).toBe(true);
    expect(wrapper.find('.image-loading').exists()).toBe(true);
    expect(wrapper.find('.content-loading .title-loading.lg-content').exists()).toBe(true);
    expect(wrapper.find('.content-loading .title-short-loading.lg-content').exists()).toBe(true);
    expect(wrapper.find('.content-loading .category-rating-loading .category-loading').exists()).toBe(true);
    expect(wrapper.find('.content-loading .category-rating-loading .rating-loading').exists()).toBe(true);
    expect(wrapper.findAll('.content-loading .container-desc-loading .description-loading').length).toBe(5);
    expect(wrapper.find('.content-loading .price-loading').exists()).toBe(true);
    expect(wrapper.findAll('.content-loading .container-btn-loading .btn-loading').length).toBe(2);
  });
});
