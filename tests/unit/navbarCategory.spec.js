import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import NavbarProduct from '@/components/category/NavbarProduct.vue';

describe('NavbarProduct', () => {
  it('renders navbar correctly with light theme', () => {
    const gender = 'men';
    const totalCart = 3;
    const theme = 'light';

    const wrapper = shallowMount(NavbarProduct, {
      propsData: {
        gender,
        totalCart,
        theme,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    // Check if navbar is rendered correctly
    expect(wrapper.find('header').classes()).toContain('color-men');

    // Check if buttons are rendered correctly
    const buttons = wrapper.findAll('.btn-nav');
    expect(buttons.length).toBe(3);

    // Check if theme toggle button is rendered with moon icon
    expect(buttons.at(1).find('.fa-moon').exists()).toBe(true);

    // Check if cart button is rendered with correct icon and badge
    const cartButton = buttons.at(2);
    expect(cartButton.find('.fa-cart-shopping').exists()).toBe(true);
    expect(cartButton.find('.badge').text()).toBe(totalCart.toString());
  });

  it('renders navbar correctly with dark theme', async () => {
    const gender = 'women';
    const totalCart = 0;
    const theme = 'dark';

    const wrapper = shallowMount(NavbarProduct, {
      propsData: {
        gender,
        totalCart,
        theme,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    // Check if navbar is rendered correctly
    expect(wrapper.find('header').classes()).toContain('color-women');

    // Check if buttons are rendered correctly
    const buttons = wrapper.findAll('.btn-nav');
    expect(buttons.length).toBe(3);

    await buttons.at(1).trigger('click');

    // Check if theme toggle button is rendered with sun icon
    expect(buttons.at(1).find('.fa-sun').exists()).toBe(true);

    // Check if cart button is rendered with correct icon and no badge
    const cartButton = buttons.at(2);
    expect(cartButton.find('.fa-cart-shopping').exists()).toBe(true);
    expect(cartButton.find('.badge').exists()).toBe(false);
  });

  it('emits themeEvent when theme toggle button is clicked', async () => {
    const gender = 'other';
    const totalCart = 2;
    const theme = 'light';

    const wrapper = shallowMount(NavbarProduct, {
      propsData: {
        gender,
        totalCart,
        theme,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    // Simulate click on theme toggle button
    await wrapper.findAll('.btn-nav').at(1).trigger('click');

    // Expect themeEvent to be emitted with new theme value
    expect(wrapper.emitted('themeEvent')).toBeTruthy();
    expect(wrapper.emitted('themeEvent')[0]).toEqual(['dark']);

    // // Click the theme toggle button again
    // await wrapper.find('.navigation').trigger('click');

    // // Expect themeEvent to be emitted again with original theme value
    // expect(wrapper.emitted('themeEvent')[1]).toEqual(['light']);
  });
});
