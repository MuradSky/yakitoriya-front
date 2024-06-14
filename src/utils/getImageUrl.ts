export const getImageUrl = (path: string) => {
	const url = new URL(`/assets/images/${path}`, import.meta.url).href
	console.log(import.meta)

	return url
}
