import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';

import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SingnInComponent } from './signin/signin.component';


@NgModule({
  declarations:[SingnInComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule

  ]
})
export class HomeModule {

}
