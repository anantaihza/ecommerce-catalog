import { shallowMount } from '@vue/test-utils';
import ButtonProduct from '@/components/category/ButtonProduct.vue';

describe('ButtonProduct', () => {
  it('renders outline button correctly and emits nextProductEvent when clicked', () => {
    const btnType = 'outline';
    const gender = 'men';

    const wrapper = shallowMount(ButtonProduct, {
      propsData: {
        btnType,
        gender,
      },
      slots: {
        default: 'Next Product',
      },
    });

    // Check if button type is rendered correctly
    const buttonElement = wrapper.find('button');
    expect(buttonElement.classes()).toContain('btn-outline-men');

    // Simulate click and check if event is emitted
    buttonElement.trigger('click');
    expect(wrapper.emitted('nextProductEvent')).toBeTruthy();
  });

  it('renders solid button correctly and emits buyNowEvent when clicked', () => {
    const btnType = 'solid';
    const gender = 'women';

    const wrapper = shallowMount(ButtonProduct, {
      propsData: {
        btnType,
        gender,
      },
      slots: {
        default: 'Buy Now',
      },
    });

    // Check if button type is rendered correctly
    const buttonElement = wrapper.find('button');
    expect(buttonElement.classes()).toContain('btn-solid-women');

    // Simulate click and check if event is emitted
    buttonElement.trigger('click');
    expect(wrapper.emitted('buyNowEvent')).toBeTruthy();
  });

  it('validates required props', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component without required props
    shallowMount(ButtonProduct);

    // Expect console.error to be called with validation error message for missing 'btnType' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Missing required prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });

  it('validates btnType prop', () => {
    // Create a spy to suppress console.error output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mount component with invalid 'btnType' prop
    shallowMount(ButtonProduct, {
      propsData: {
        btnType: 'invalid',
        gender: 'women',
      },
      slots: {
        default: 'Invalid Button',
      },
    });

    // Expect console.error to be called with validation error message for invalid 'btnType' prop
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop'));

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
