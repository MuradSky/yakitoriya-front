export const timerFormatter = (min: number, sec: number)=> {
	return `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
}
