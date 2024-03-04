import { shallowMount } from '@vue/test-utils';
import CardCart from '@/components/cart/CardCart.vue';

describe('CardCart', () => {
  it('renders no cart message when cart is empty', () => {
    const wrapper = shallowMount(CardCart, {
      propsData: {
        cart: [],
      },
    });

    expect(wrapper.find('.no-cart').exists()).toBe(true);
  });

  it('renders product cards when cart is not empty', () => {
    const cart = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];

    const wrapper = shallowMount(CardCart, {
      propsData: {
        cart,
      },
    });

    expect(wrapper.find('.no-cart').exists()).toBe(false);
    expect(wrapper.findAllComponents({ name: 'ProductCart' }).length).toBe(cart.length);
  });

  it('emits deteleCartIdEvent when delete button is clicked', async () => {
    const cart = [{ id: 1, name: 'Product 1' }];
    const wrapper = shallowMount(CardCart, {
      propsData: {
        cart,
      },
    });

    await wrapper.findComponent({ name: 'ProductCart' }).vm.$emit('deteleCartIdEvent', 1);

    expect(wrapper.emitted('deteleCartIdEvent')).toBeTruthy();
    expect(wrapper.emitted('deteleCartIdEvent')[0]).toEqual([1]);
  });
});
