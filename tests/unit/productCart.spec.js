import { shallowMount } from '@vue/test-utils';
import ProductCart from '@/components/cart/ProductCart.vue';

describe('ProductCart', () => {
  it('renders product details correctly', () => {
    const product = {
      id: 1,
      title: 'Product 1',
      category: 'Category 1',
      price: 10.99,
      image: 'product1.jpg',
    };
    const quantity = 2;

    const wrapper = shallowMount(ProductCart, {
      propsData: {
        product,
        quantity,
      },
    });

    expect(wrapper.find('.title').text()).toBe(product.title);
    expect(wrapper.find('.category').text()).toBe(product.category);
    expect(wrapper.find('.price').text()).toBe(`$${product.price}`);
    expect(wrapper.find('.quantity').text()).toBe(quantity.toString());
  });

  it('emits deteleCartIdEvent when delete button is clicked', async () => {
    const product = { id: 1, title: 'Product 1' };
    const quantity = 1;
    const wrapper = shallowMount(ProductCart, {
      propsData: {
        product,
        quantity,
      },
    });

    await wrapper.find('.btn-delete').trigger('click');

    expect(wrapper.emitted('deteleCartIdEvent')).toBeTruthy();
    expect(wrapper.emitted('deteleCartIdEvent')[0]).toEqual([product.id]);
  });
});
