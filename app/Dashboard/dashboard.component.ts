import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { List } from 'immutable';

import { HeroService } from '../hero.service';
import { Hero } from '../model/Hero';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `<my-dashboard-hero-list [heroes]="heroes"></my-dashboard-hero-list>
              <hero-search></hero-search>`
})
export class DashboardComponent implements OnInit {
  heroes: List<Hero>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.heroService.getHeroes().then(heroes => {
      if (heroes) {
        this.heroes = List(heroes.slice(1, 5));
      }
    });
  }
}