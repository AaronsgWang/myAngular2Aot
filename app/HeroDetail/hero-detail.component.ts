import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';
import { HeroRecord, Hero } from '../model/Hero';

@Component({
	selector: 'my-hero-detail',
	template: `<button (click)="back()">Back</button>
			<my-hero-detail-content [hero]="hero" (onSave)="save($event)"></my-hero-detail-content>`
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit{
	hero: HeroRecord;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = new HeroRecord(hero));
	}

	back(): void{
		this.location.back();
	}

	save(hero: HeroRecord) {
	  this.heroService.update(hero.toObject() as Hero).then(() => this.back());
	}
}