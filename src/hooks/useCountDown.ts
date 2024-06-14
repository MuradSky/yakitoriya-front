import { useEffect, useState} from 'react';

export const useCountDown = (min: number, sec: number)=> {
	const [seconds, setSeconds] = useState(sec)
	const [minutes, setMinutes] = useState(min < 0 ? 0 : min)

	useEffect(() => {
		if (seconds === 0 && minutes === 0) return

		let interval: any = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		}
	})

	const resetTimer = () => {
		setMinutes(min === -1 ? 0 : min)
		setSeconds(sec === -1 ? 0 : sec)
	}

	const setTimer = (min: number, sec: number)=> {
		setSeconds(sec)
		setMinutes(min < 0 ? 0 : min)
	}

	return {
		seconds,
		minutes,
		setTimer,
		resetTimer
	}
}
