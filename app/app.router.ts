import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: 'app/Heroes/heroes.module#HeroesModule'
  },
  {
  	path: 'dashboard',
  	loadChildren: 'app/Dashboard/dashboard.module#DashboardModule'
  },
  {
	path: 'detail/:id',
	loadChildren: 'app/HeroDetail/hero-detail.module#HeroDetailModule'
  },
  {
  	path: '',
  	redirectTo: 'dashboard',
  	pathMatch: 'full'
  }
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule{}