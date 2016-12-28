import { Input, Component, ChangeDetectionStrategy } from '@angular/core';

import { List } from 'immutable';

import { HeroService } from '../hero.service';
import { Hero } from '../model/Hero';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard-hero-list',
	styleUrls: [ 'dashboard.component.css' ],
	templateUrl: 'dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeroListComponent {
  @Input()
  heroes: List<Hero>;
}