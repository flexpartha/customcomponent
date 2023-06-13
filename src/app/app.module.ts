import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRequiredFieldComponent } from './shared/app-required-field/app-required-field.component';
import { FormFieldComponent } from './shared/form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRequiredFieldComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
