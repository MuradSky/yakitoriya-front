export const reformCn = (...arg: string[])=> {
	const classNames: string[] = arg
	return classNames.join(' ').trim()
}
