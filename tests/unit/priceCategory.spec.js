import { shallowMount } from '@vue/test-utils';
import PriceProduct from '@/components/category/PriceProduct.vue';

describe('PriceProduct', () => {
  it('renders price with correct class based on gender prop', () => {
    const price = 50;
    const gender = 'men';

    const wrapper = shallowMount(PriceProduct, {
      propsData: {
        price,
        gender,
      },
    });

    // Check if price is rendered correctly
    expect(wrapper.find('h3').text()).toBe(`$${price}`);

    // Check if class is applied correctly
    expect(wrapper.classes()).toContain('price-product');
    expect(wrapper.classes()).toContain(`color-${gender}`);
  });

  it('validates props', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component with missing or invalid props
    shallowMount(PriceProduct, {
      propsData: {
        // Missing 'price' prop
        gender: 'male',
      },
    });

    // Expect console.error to be called with validation error message for missing 'price' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Missing required prop'));

    // Mount component with invalid 'price' prop
    shallowMount(PriceProduct, {
      propsData: {
        price: 'invalid', // Price should be a number
        gender: 'male',
      },
    });

    // Expect console.error to be called with validation error message for invalid 'price' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
