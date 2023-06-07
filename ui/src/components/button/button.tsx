import { Component, Prop, h } from '@stencil/core';
import { ButtonSize, Variant } from '../../types';

@Component({
  tag: 'r2n-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
 
  @Prop() size: ButtonSize;

  @Prop() variant: Variant;

  render() {
    return <button><slot/></button>;
  }
}
