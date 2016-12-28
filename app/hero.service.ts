import { Injectable } from '@angular/core';
import { Http, Headers }    from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './model/Hero';
import { Wait } from './util';

const heroes: Hero[] = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

@Injectable()
export class HeroService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private heroesUrl = 'app/heroes';  // URL to web api

	constructor(private http: Http){}

	getHeroes(): Promise<Hero[]>{
		return Promise.resolve(JSON.parse(JSON.stringify(heroes)));
		// return Promise.all([this.getHeroes1(), this.getHeroes2()])
		// 	.then(datas => datas[0])
		// 	.catch(ex => console.error('An error occurred', ex));
	}

	getHero(id: number): Promise<Hero>{
		return Promise.resolve(heroes.find(x=> x.id === id));
		// return this.http.get(this.heroesUrl).toPromise().then(response => (response.json().data as Hero[]).find(x=> x.id === id));
	}

	update(hero: Hero): Promise<Hero>{
		return Promise.resolve(this.updateEntity(hero));
		// const url = `${this.heroesUrl}/${hero.id}`;
		// return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise().then(()=> hero);
	}

	updateEntity(hero: Hero): Hero{
		let index = heroes.findIndex(x=> x.id === hero.id);
		if(index >= 0)
			heroes[index] = hero;
		return hero;
	}

	create(heroName: string): Promise<Hero>{
		return Promise.resolve(this.createEntity(heroName));
		// return this.http.post(this.heroesUrl, JSON.stringify({ name: heroName }), {headers: this.headers}).toPromise().then(response => response.json().data as Hero);
	}

	createEntity(heroName: string): Hero{
		let id = heroes[heroes.length - 1].id + 1;
		let hero = new Hero();
		hero.id = id;
		hero.name = heroName;
		heroes.push(hero);
		return hero;
	}

	delete(id: number): Promise<void>{
		return Promise.resolve(this.deleteEntity(id));
		// return this.http.delete(`${this.heroesUrl}/${id}`, {headers: this.headers}).toPromise().then(() => null);
	}

	deleteEntity(id: number): void{
		let index = heroes.findIndex(x=> x.id === id);
		if(index >= 0)
			heroes.splice(index, 1);
	}

	searchHeroes(term: string):Observable<Hero[]>{
		if(!term)
			return Observable.of<Hero[]>([]);
		return Observable.of<Hero[]>(this.searchHeroEntities(term));
		// return this.http
  //              .get(`${this.heroesUrl}/?name=${term}`)
  //              .map(response => response.json().data as Hero[]);
	}

	searchHeroEntities(term: string): Hero[]{
		return heroes.filter(x=> x.name.toLowerCase().indexOf(term.toLowerCase()) >= 0);
	}

	private getHeroes1(): Promise<Hero[]>{
		console.log("getHeroes1 before");
		return Wait(2000).then(()=>{
			console.log("getHeroes1");
			return this.http.get(this.heroesUrl).toPromise();
		}).then(response=> response.json().data as Hero[]);
	}

	private getHeroes2(): Promise<Hero[]>{
		console.log("getHeroes2 before");
		return Wait(2000).then(()=>{
			console.log("getHeroes2");
			return this.http.get(this.heroesUrl).toPromise();
		}).then(response=> response.json().data as Hero[]);
	}
}