import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { FormSinComponent } from './form-sin/form-sin.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'main' , component: MainComponent },
  { path: 'signup' , component: FormComponent},
  { path: 'signin', component: FormSinComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
