import { shallowMount } from '@vue/test-utils';
import DescriptionProduct from '@/components/category/DescriptionProduct.vue';

describe('DescriptionProduct', () => {
  it('renders description correctly', () => {
    const description = 'Example product description text';

    const wrapper = shallowMount(DescriptionProduct, {
      propsData: {
        description,
      },
    });

    // Check if description is rendered correctly
    const descriptionElement = wrapper.find('.description-content');
    expect(descriptionElement.text()).toBe(description);
  });

  it('validates required prop', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component without required prop
    shallowMount(DescriptionProduct);

    /* Expect console.error to be called with validation
    * error message for missing 'description' prop
    */
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Missing required prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
