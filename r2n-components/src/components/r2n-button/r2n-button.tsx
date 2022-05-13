import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'r2n-button',
  styleUrl: 'r2n-button.css',
  shadow: true,
})
export class R2nButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
