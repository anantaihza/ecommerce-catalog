import { shallowMount } from '@vue/test-utils';
import TitleProduct from '@/components/category/TitleProduct.vue';

describe('TitleProduct', () => {
  it('renders title with correct classes based on props', () => {
    const title = 'Product Title';
    const display = 'lg';
    const gender = 'women';

    const wrapper = shallowMount(TitleProduct, {
      propsData: {
        title,
        display,
        gender,
      },
    });

    // Check if title is rendered correctly
    expect(wrapper.text()).toBe(title);

    // Check if classes are applied correctly
    const titleHeader = wrapper.find('h1');
    expect(titleHeader.classes()).toContain('title-content');
    expect(titleHeader.classes()).toContain(`${display}-content`);
    expect(titleHeader.classes()).toContain(`color-${gender}`);
  });

  it('validates display prop', () => {
    const title = 'Product Title';
    const invalidDisplay = 'invalid';
    const gender = 'women';

    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    shallowMount(TitleProduct, {
      propsData: {
        title,
        display: invalidDisplay,
        gender,
      },
    });

    // Expect console.error to be called with validation error message
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop: custom validator check failed for prop "display"'));
    consoleSpy.mockRestore();
  });
});
