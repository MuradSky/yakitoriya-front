import {useEffect, useState} from 'react';
const params = (items: number) => Array.from(Array(items)).map(()=> false)
export const useCraneSelect = (items: number, reset?: any, reStart?: any, animaStep?: any)=> {
	const [isReset, setReset] = useState(false)
	const [isFinish, setIsFinish] = useState(false)
	const [current, setCurrent] = useState<null | number>(null)
	const [selectSort, setSelectSort] = useState<number[]>([])
	const [register, setRegister] = useState(params(items))

	useEffect(()=> {
		if (animaStep.length >= 5) {
			setIsFinish(true)
		} else if (animaStep.length === 0 && isFinish) {
			setIsFinish(false)
		}
	}, [animaStep, isFinish, setIsFinish])

	useEffect(()=> {
		if (animaStep.length > 0) {
			let clone = [...register]
			if (isFinish) {
				clone[animaStep[0]-1] = false
			} else {
				clone[animaStep[animaStep.length-1]-1] = true
			}
			setRegister(clone)
			setSelectSort(animaStep.map((n:number)=> n-1))
		}
	}, [animaStep, isFinish])

	useEffect(()=> {
		const callBack = ()=> {
			const cloneTop = [...register]
			cloneTop[selectSort[selectSort.length-1]] = false

			const timeout = setInterval(()=> {
				setRegister(cloneTop)
				setSelectSort((state: number[])=> {
					const clone = [...state]
					clone.pop()
					return clone
				})
			}, 1000)
			return ()=> clearInterval(timeout)
		}
		if (current !== null && selectSort.length > 1) {
			return callBack()
		}
		if ((isReset && selectSort.length > -1)) {
			if (selectSort.length === 0) {
				reStart && reStart()
				setReset(false)
			}
			return callBack()
		}
	})

	const onSelected = (index: number)=> () => {
		reset && reset()
		const clone = [...register]
		clone[index] = true
		setRegister(clone)
		setCurrent(index)
		setSelectSort((state: number[]) => {
			const isThereIndex = state.indexOf(index)
			if (isThereIndex !== -1) {
				const clone = [...state]
				clone.splice(isThereIndex, 1)
				clone.unshift(index)
				return clone
			}
			return [index, ...state]
		})
	}

	const resetSelected = ()=> {
		setReset(true)
		setCurrent(null)
	}

	return {
		onSelected,
		register,
		resetSelected,
		current,
	}
}
