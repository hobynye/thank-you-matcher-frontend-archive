import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbassadorRoutingModule } from './ambassador-routing.module';
import { AmbassadorComponent } from './ambassador.component';
import { AmbassadorListComponent } from './ambassador-list/ambassador-list.component';

@NgModule({
  declarations: [
    AmbassadorComponent,
    AmbassadorListComponent
  ],
  imports: [
    CommonModule,
    AmbassadorRoutingModule
  ]
})
export class AmbassadorModule { }
