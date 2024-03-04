import { shallowMount } from '@vue/test-utils';
import CategoryProduct from '@/components/category/CategoryProduct.vue';

describe('CategoryProduct', () => {
  it('renders category correctly', () => {
    const category = 'Example Category';

    const wrapper = shallowMount(CategoryProduct, {
      propsData: {
        category,
      },
    });

    // Check if category is rendered correctly
    const categoryElement = wrapper.find('.category p');
    expect(categoryElement.text()).toBe(category);
  });

  it('validates required prop', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component without required prop
    shallowMount(CategoryProduct);

    // Expect console.error to be called with validation error message for missing 'category' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Missing required prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
