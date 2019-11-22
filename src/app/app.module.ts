import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FormSinComponent } from './form-sin/form-sin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    MainComponent,
    FormSinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
