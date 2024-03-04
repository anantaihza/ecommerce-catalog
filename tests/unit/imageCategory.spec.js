import { shallowMount } from '@vue/test-utils';
import ImageProduct from '@/components/category/ImageProduct.vue';

describe('ImageProduct', () => {
  it('renders image with correct src and alt attributes', () => {
    const image = 'example.jpg';
    const alt = 'Example Image Alt Text';

    const wrapper = shallowMount(ImageProduct, {
      propsData: {
        image,
        alt,
      },
    });

    // Check if image src and alt attributes are rendered correctly
    const imgElement = wrapper.find('.product-img');
    expect(imgElement.attributes('src')).toBe(image);
    expect(imgElement.attributes('alt')).toBe(alt);
  });

  it('validates required props', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component without required props
    shallowMount(ImageProduct);

    // Expect console.error to be called with validation error message for missing 'image' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Missing required prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
