import { Input, Output, EventEmitter, Component, ChangeDetectionStrategy } from '@angular/core';
import { Router }            from '@angular/router';

import { List } from 'immutable';

import { Hero } from '../model/Hero';

@Component({
  selector: 'hero-search-co',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchCoComponent {
  @Input()
  heroes: List<Hero>;

  @Output("onSearch")
  onSearch:EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.onSearch.next(term);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/heroes/detail', hero.id];
    this.router.navigate(link);
  }
}
