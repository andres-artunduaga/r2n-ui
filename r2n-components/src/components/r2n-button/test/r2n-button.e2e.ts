import { newE2EPage } from '@stencil/core/testing';

describe('r2n-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<r2n-button></r2n-button>');

    const element = await page.find('r2n-button');
    expect(element).toHaveClass('hydrated');
  });
});
