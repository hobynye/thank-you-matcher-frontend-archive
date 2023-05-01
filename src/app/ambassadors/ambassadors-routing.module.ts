import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbassadorsComponent } from './ambassadors.component';

const routes: Routes = [{ path: '', component: AmbassadorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbassadorsRoutingModule { }
