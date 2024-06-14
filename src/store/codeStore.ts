import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCodeStore = create<TCode>()(
	persist((set, get) => <TCode>({
			saveReferralCode: null,
			addReferralCode: (saveReferralCode)=> set({ saveReferralCode }),
			isOpenInvite: false,
			addOpenInvite: (isOpenInvite: boolean) => set({ isOpenInvite }),
			inviteCode: {
				id: 0,
				code: '',
				url: ''
			},
			addInviteCode: (inviteCode: TInvite ) => set({ inviteCode })
		}),
		{
			name: 'code-store',
			storage: createJSONStorage(() => localStorage),
			merge: (persistedState, currentState)=> {
				//@ts-ignore
				return {...currentState, ...persistedState, isOpenInvite: false}
			}
		},
	),
)

