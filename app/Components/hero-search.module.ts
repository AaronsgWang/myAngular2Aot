import { NgModule }            from '@angular/core';
import { SharedModule }    from '../shared/shared.module';

import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchCoComponent } from './hero-search.list.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ HeroSearchComponent, HeroSearchCoComponent ],
  exports: [ HeroSearchComponent ]
})
export class HeroSearchModule { }