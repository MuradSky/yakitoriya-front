import { create } from 'zustand'

export const usePrizesStore = create<TPrizes>((set, get)=> ({
	isOpenQr: false,
	addOpenQr: (isOpenQr: boolean)=> set({ isOpenQr }),

	prizeSelect: {
		isOpen: false,
		id: 0,
	},
	addPrizeOpen: (prizeSelect: PrizeSelect)=> set({ prizeSelect })
}))
