import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationDetailsComponent} from './application-details.component';

const routes: Routes = [
  { path: 'application-details/:id', component:  ApplicationDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationDetailsRoutingModule { }
