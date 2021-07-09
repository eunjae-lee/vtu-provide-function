import { mount } from '@vue/test-utils';

const Comp = {
  template: `
    <div>hello {{name}}</div>
  `,
  inject: {
    name: { from: '$name' },
  },
};

describe('provide', () => {
  it('works in an object form', () => {
    const wrapper = mount(Comp, {
      global: {
        provide: {
          $name: 'Eunjae',
        },
      },
    });
    expect(wrapper.html()).toMatchInlineSnapshot(`<div>hello Eunjae</div>`);
  });

  it('works in a function form', () => {
    const wrapper = mount(Comp, {
      global: {
        provide() {
          return { $name: 'Eunjae' };
        },
      },
    });
    expect(wrapper.html()).toMatchInlineSnapshot(`<div>hello </div>`);
  });
});
