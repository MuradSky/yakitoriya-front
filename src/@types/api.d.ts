interface ApiPrize {
	id: number
	action: string | null
	description: null | string
	gift_code: string
	image: {
		id: number,
		path: string | null
	}
	is_digital: boolean
	is_food: boolean
	name: string
	type: null | string
	pincode: string | null
}

