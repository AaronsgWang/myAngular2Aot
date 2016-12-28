import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { List } from 'immutable';

import { Hero } from '../model/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-search',
  template: `<hero-search-co [heroes]="heroes" (onSearch)="search($event)"></hero-search-co>`
  // styleUrls: [ 'hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes: List<Hero>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroService: HeroService) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(`Typed ${term}`);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms
      .debounceTime(100)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap<string, Hero[]>(term => this.heroService.searchHeroes(term))   // switch to new observable each time
      .subscribe(heroes => {
        this.heroes = List(heroes);
      });
  }
}