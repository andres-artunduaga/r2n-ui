import { Component, h } from '@stencil/core';

@Component({
  tag: 'r2n-button',
  styleUrl: 'r2n-button.css',
  shadow: true,
})
export class R2NButton {
  render() {
    return <button><slot/></button>;
  }
}
