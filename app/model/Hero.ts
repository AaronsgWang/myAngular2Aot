import { Recorder, CreateRecord } from '../Utils/Helper';

class Hero{
	id: number;
	name: string;
}

type HeroRecord = Recorder<Hero>;

const CreateHero = CreateRecord<Hero>({id: 0, name: ''});

export { Hero, HeroRecord, CreateHero };