import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create<TAuth>()(
	persist((set, get) => <TAuth>({
			isOpenAuth: false,
			addOpenAuth: (isOpenAuth: boolean)=> set({ isOpenAuth }),
			phone: '',
			addPhone: (phone: string) => set({ phone }),
			isResetPass: false,
			addRestPass: (isResetPass: boolean) => set({ isResetPass, isOpenAuth: false }),
			isRegister: false,
			addIsRegister: (isRegister: boolean)=> set({ isRegister }),
			isLogin: false,
			addIsLogin: (isLogin: boolean)=> set({ isLogin }),
			isOpenEmail: false,
			addOpenEmail: (isOpenEmail: boolean) => set( { isOpenEmail }),
			email: {
				isEmailSubscribed: false,
				isFirstSend: false,
			},
			addEmail: (email: TEmail) => set({ email }),
			registerData: null,
			addRegisterData: (registerData)=> set({ registerData }),
			emailToken: null,
			addEmailToken: (emailToken: string)=> set({ emailToken }),
			isConfirmEmail: false,
			addConfirmEmail: (isConfirmEmail: boolean)=> set({ isConfirmEmail }),
			userAgentData: {
				ip: null,
				user_agent: null
			},
			addUserAgent: (userAgentData: UserAgent) => set({ userAgentData }),
			isOpenReceive: false,
			addOpenReceive: (isOpenReceive: boolean)=> set({ isOpenReceive }),
		}),
		{

			name: 'auth-store',
			storage: createJSONStorage(() => localStorage),
			merge: (persistedState, currentState)=> {
				const setting = {
					isOpenEmail: false,
					isOpenAuth: false,
					isResetPass: false,
					registerData: null,
					isOpenReceive: false,
				}
				//@ts-ignore
				return ({...currentState, ...persistedState, ...setting})
			}
		},
	),
)
