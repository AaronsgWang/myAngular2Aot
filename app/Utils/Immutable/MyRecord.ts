import { Record, Map } from 'immutable';

type Recorder<T> = Map<string, any> & T;

function CreateRecord<T>(defaultValues: T): (entity?: Patt<T>)=>Recorder<T>{
	let result: (entity?: Patt<T>)=>Recorder<T> = InnerCreateRecord.bind(undefined, defaultValues);
	return result;
}

function InnerCreateRecord<T>(defaultValues: T, entity?: Patt<T>): Recorder<T>{
	return CreateRecordClass(RecordWrapper<T>(defaultValues), entity);
}

function CreateRecordClass<T>(ctor: Record.Class, entity?: Patt<T>): Recorder<T>{
	let res: Map<string, any>;
	if(entity){
		let innerValues: {[key: string]: any} = {};
		for(let key in entity){
			innerValues[key] = entity[key];
		}
		res = new ctor(innerValues);
	} else {
		res = new ctor();
	}

	return <Recorder<T>>res;
}

function RecordWrapper<T>(defaultValues: T, name?: string) : Record.Class{
	let innerDefaultValues: {[key: string]: any} = {};
	for(let key in defaultValues){
		innerDefaultValues[key] = defaultValues[key];
	}
	let result = Record(innerDefaultValues, name);
	return result;
}

type Patt<T> = {
	[P in keyof T]? : T[P];
}

export { Recorder, CreateRecord };