import { NgModule } from "@angular/core";
import { defineCustomElements } from "@r2n/ui/loader";

import { MyComponent } from "./directives/proxies";

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  MyComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class R2nComponentsAngularModule {}