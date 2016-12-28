import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.router.aot';
import { HeroService } from './hero.service';

import { HeroesModule } from './Heroes/heroes.module';
import { HeroDetailModule } from './HeroDetail/hero-detail.module';
import { DashboardModule } from './Dashboard/dashboard.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), HeroesModule, HeroDetailModule, DashboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[{provide: HeroService, useClass: HeroService }]
})
export class AppModule { }
