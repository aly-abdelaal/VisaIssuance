import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HcCommitteeApplicationComponent } from './components/hc-committee-application/hc-committee-application.component';
// import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'committee-application/:id', component:  HcCommitteeApplicationComponent},
  // { path: 'application-details/:id', component:  ApplicationDetailsComponent},
  { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
