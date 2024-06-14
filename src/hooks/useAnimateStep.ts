import {useEffect, useRef, useState} from 'react';
const positions: any = {
	1: [1, 5, 4, 2, 3],
	2: [2, 1, 5, 4, 3],
	3: [3, 4, 5, 1, 2],
	4: [4, 3, 1, 5, 2],
	5: [5, 1, 3, 4, 2],
}
const ms = 2000
const num = ()=> Math.floor(Math.random() * 5) + 1;

export const useAnimateStep = ()=> {
	const [isPause, setIsPause] = useState(false)
	const [count, setCount] = useState(1)
	const [steps, setSteps] = useState<any>([])
	const [step, setStep] = useState<any>([])
	const [isFull, setIsFull] = useState(false)
	const [pos, setPosition] = useState<any>(null)

	useEffect(()=> {
		if (pos) {
			const postPos = positions[pos]
			setStep([postPos[0]])
		}
	}, [pos])

	const growing = (postPos: any)=> {
		setCount(count+1)
		const lastIndex = step.indexOf(step[step.length - 1]) + 1
		const clone = [...step]
		clone.push(postPos[lastIndex])
		setStep(clone)
		if (clone.length === 5) setIsFull(true)
		if (count === 10) {
			setCount(1)
		}
	}
	const killing = ()=> {
		setCount(count+1)
		const clone = [...step]
		clone.shift()
		setStep(clone)
		if (clone.length === 0) setIsFull(false)
	}


	useEffect(()=> {
		let animateRef: any = null
		if (pos && !isPause) {
			const postPos = positions[pos]
			let ms = isFull ? 2000 : 1500
			animateRef = setInterval(()=> {
				if (step.length === 0) setStep([postPos[0]])
				if (isFull) killing()
				if (!isFull) growing(postPos)
			}, ms)
		}
		return () => clearInterval(animateRef);
	})


	useEffect(()=> {
		const stepStarter = ()=> {
			const n = num()
			if (steps.length === 5) return setSteps([n])
			if (steps.indexOf(n) === -1) {
				setSteps([...steps, n])
			}
		}
		if (count === 1) stepStarter()
	}, [count])

	useEffect(()=> {
		if (steps.length > 0) {
			setPosition(steps[steps.length-1])
		}
	}, [steps])

	const reset = () => {
		setStep([])
		setPosition(null)
		setIsPause(false)
	}

	const play = ()=> {
		setIsPause(false)
	}

	const pause = ()=> {
		setIsPause(true)
	}

	const stop = ()=> {
		setPosition(null)
	}

	const reStart = () => {
		setStep([])
		setPosition(null)
		setTimeout(()=> {
			const n = num()
			setPosition(n)
		}, 3000)
	}

	return {
		step,
		stop,
		reStart,
		reset,
		play,
		pause,
		isFull,
		isPause
	}
}
