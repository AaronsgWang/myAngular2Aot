import { NgModule }            from '@angular/core';
import { SharedModule }    from '../shared/shared.module';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailContentComponent } from './hero-detail.content.component';
import { HeroDetailRoutingModule }   from './hero-detail.routing.module';

@NgModule({
  imports: [ SharedModule, HeroDetailRoutingModule ],
  declarations: [ HeroDetailComponent, HeroDetailContentComponent ],

})
export class HeroDetailModule { }