import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app.router';
import { HeroService } from './hero.service';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[{provide: HeroService, useClass: HeroService }]
})
export class AppModule { }
