/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface R2nButton {
    }
}
declare global {
    interface HTMLR2nButtonElement extends Components.R2nButton, HTMLStencilElement {
    }
    var HTMLR2nButtonElement: {
        prototype: HTMLR2nButtonElement;
        new (): HTMLR2nButtonElement;
    };
    interface HTMLElementTagNameMap {
        "r2n-button": HTMLR2nButtonElement;
    }
}
declare namespace LocalJSX {
    interface R2nButton {
    }
    interface IntrinsicElements {
        "r2n-button": R2nButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "r2n-button": LocalJSX.R2nButton & JSXBase.HTMLAttributes<HTMLR2nButtonElement>;
        }
    }
}
