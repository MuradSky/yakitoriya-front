interface TInvite {
	id: number,
	code: string,
	url: string
}

interface TCode {
	saveReferralCode: string | null
	addReferralCode: (saveReferralCode: string)=> void
	isOpenInvite: boolean
	addOpenInvite: (isOpenInvite: boolean) => void
	inviteCode: TInvite
	addInviteCode: (inviteCode: TInvite | {}) => void
}

interface TRegister {
	name: string
	phone: string
	code: string
	personal_data_confirmation: boolean
	subscriptions: boolean
}

interface TEmail {
	isEmailSubscribed: boolean
	isFirstSend: boolean
}

interface UserAgent {
	ip: string | null,
	user_agent: string | null
}

interface TAuth {
	isOpenAuth: boolean,
	addOpenAuth: (isOpenAuth: boolean)=> void
	phone: string,
	addPhone: (phone: string)=> void,
	isResetPass: boolean,
	addRestPass: (isResetPass: boolean)=> void
	isRegister: boolean,
	addIsRegister: (isRegister: boolean)=> void
	isLogin: boolean
	addIsLogin: (isLogin)=> void
	isOpenEmail: boolean,
	addOpenEmail: (isOpenEmail: boolean) => void
	email: TEmail
	addEmail: (email: TEmail)=> void
	registerData: TRegister | null
	addRegisterData: (registerData: TRegister | null) => void
	emailToken: null | string
	addEmailToken: (emailToken: string | null)=> void
	isConfirmEmail: boolean,
	addConfirmEmail: (isConfirmEmail: boolean)=> void
	userAgentData: UserAgent
	addUserAgent: (userAgentData: UserAgent)=> void,
	isOpenReceive: boolean,
	addOpenReceive: (isOpenReceive: boolean)=> void
}

interface PrizeSelect {
	isOpen: boolean,
	id: number | string
}

interface TPrizes {
	isOpenQr: boolean,
	addOpenQr: (isOpenQr: boolean)=> void
	prizeSelect: PrizeSelect,
	addPrizeOpen: (prizeSelect: PrizeSelect)=> void
}
