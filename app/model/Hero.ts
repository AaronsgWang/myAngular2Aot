import { Record } from 'immutable';

class Hero{
	id: number;
	name: string;
}

type HeroParams = {
    id?: number,
    name?: string,
};

class HeroRecord extends Record({ id: 0, name: '' }){
	id: number;
	name: string;

	constructor(params?: HeroParams){
		params ? super(params): super();
	}
}

export { Hero, HeroRecord };