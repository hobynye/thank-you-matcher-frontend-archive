import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmbassadorListComponent } from "./ambassador-list/ambassador-list.component";

const routes: Routes = [
  { path: 'list', component: AmbassadorListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbassadorRoutingModule { }
