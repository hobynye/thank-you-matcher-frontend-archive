import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbassadorComponent } from './ambassador.component';

const routes: Routes = [{ path: '', component: AmbassadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbassadorRoutingModule { }
