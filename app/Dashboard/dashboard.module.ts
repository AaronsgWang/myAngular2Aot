import { NgModule }            from '@angular/core';
import { SharedModule }    from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardHeroListComponent } from './dashboard.heroList.component';
import { HeroSearchModule } from '../Components/hero-search.module';
import { DashboardRoutingModule }   from './dashboard.routing.module';

@NgModule({
  imports: [ SharedModule, DashboardRoutingModule, HeroSearchModule ],
  declarations: [ DashboardComponent, DashboardHeroListComponent ]
})
export class DashboardModule { }