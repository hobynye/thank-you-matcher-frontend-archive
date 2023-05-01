import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbassadorsRoutingModule } from './ambassadors-routing.module';
import { AmbassadorsComponent } from './ambassadors.component';


@NgModule({
  declarations: [
    AmbassadorsComponent
  ],
  imports: [
    CommonModule,
    AmbassadorsRoutingModule
  ]
})
export class AmbassadorsModule { }
