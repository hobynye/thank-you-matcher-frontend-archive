import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbassadorRoutingModule } from './ambassador-routing.module';
import { AmbassadorListComponent } from './ambassador-list/ambassador-list.component';
import { AmbassadorImportComponent } from './ambassador-import/ambassador-import.component';

@NgModule({
  declarations: [
    AmbassadorListComponent,
    AmbassadorImportComponent
  ],
  imports: [
    CommonModule,
    AmbassadorRoutingModule
  ]
})
export class AmbassadorModule { }
