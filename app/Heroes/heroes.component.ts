import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../model/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = null;
  selectedHero: Hero = null;
  isLoading: boolean = true;

  constructor(private heroService: HeroService, private router: Router){}

  ngOnInit():void{
    this.initData();
  }

  initData(){
	this.heroService.getHeroes().then(heroes => {
		this.heroes = heroes;
		this.isLoading = false;
	});
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  gotoDetail(): void {
	this.router.navigate(['/heroes/detail', this.selectedHero.id]);
  }
  add(name: string): Promise<void> {
    name = name.trim();
    if (!name) { return; }
	this.heroService.create(name).then(hero => {
		this.heroes.push(hero);
		this.selectedHero = null;
	});
  }

  delete(hero: Hero){
  	this.heroService.delete(hero.id).then(()=>{
		this.heroes = this.heroes.filter(h => h.id !== hero.id);
  		if (this.selectedHero === hero) { this.selectedHero = null; }
	});
  }
}
