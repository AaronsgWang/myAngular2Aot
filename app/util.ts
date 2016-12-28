export function Wait(num: number){
	return new Promise(resolve=> setTimeout(resolve, num));
}