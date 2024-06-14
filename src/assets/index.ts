export const imageLoader = (path: string)=> {
	return new URL(`./images/${path}`, import.meta.url).href
}
