import { newSpecPage } from '@stencil/core/testing';
import { R2nButton } from '../r2n-button';

describe('r2n-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [R2nButton],
      html: `<r2n-button></r2n-button>`,
    });
    expect(page.root).toEqualHtml(`
      <r2n-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </r2n-button>
    `);
  });
});
