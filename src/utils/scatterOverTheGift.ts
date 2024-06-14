export const scatterOverTheGift = (arr: object[] | number[])=> {
	const groups = Array.from({ length: Math.ceil(arr.length / 5) }, ()=> arr.splice(0, 5))
	const prizes = [[], [], [], [], []]
	groups.forEach((el, i) => {
		//@ts-ignore
		el.forEach((l, j) => prizes[j][i] = l)
	})
	return prizes
}
