import { shallowMount } from '@vue/test-utils';
import RatingProduct from '@/components/category/RatingProduct.vue';

describe('RatingProduct', () => {
  let wrapper;
  const rating = 3;
  const stars = ['fa-solid', 'fa-solid', 'fa-solid', 'fa-regular', 'fa-regular'];
  const gender = 'women';

  beforeEach(() => {
    wrapper = shallowMount(RatingProduct, {
      propsData: {
        rating,
        stars,
        gender,
      },
    });
  });

  it('renders rating score correctly', () => {
    expect(wrapper.find('.rating-score').text()).toBe(`${rating}/5`);
  });

  it('renders stars correctly', () => {
    const starElements = wrapper.findAll('.rating-star');
    expect(starElements.length).toBe(stars.length);

    starElements.wrappers.forEach((starElement, index) => {
      const starClass = stars[index];
      const starIcon = starElement.find('i');

      // Check if star class is applied correctly
      expect(starElement.classes()).toContain(`color-${gender}`);

      // Check if star icon class is applied correctly
      expect(starIcon.classes()).toContain('star');
      expect(starIcon.classes()).toContain(starClass);
    });
  });
});
