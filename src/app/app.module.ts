import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { GadgetsComponent } from './gadgets/gadgets.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GadgetsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
