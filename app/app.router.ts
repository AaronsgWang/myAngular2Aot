import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: './Heroes/heroes.module#HeroesModule'
  },
  {
  	path: 'dashboard',
  	loadChildren: './Dashboard/dashboard.module#DashboardModule'
  },
  // {
	// path: 'detail/:id',
	// loadChildren: './HeroDetail/hero-detail.module#HeroDetailModule'
  // },
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
