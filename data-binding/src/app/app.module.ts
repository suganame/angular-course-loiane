import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import { MyFormModule } from './my-form/my-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, MyFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
