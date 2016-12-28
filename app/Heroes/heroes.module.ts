import { NgModule }            from '@angular/core';
import { SharedModule }    from '../shared/shared.module';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule }   from './heroes.routing.module';

@NgModule({
  imports: [ SharedModule, HeroesRoutingModule ],
  declarations: [ HeroesComponent ],

})
export class HeroesModule { }