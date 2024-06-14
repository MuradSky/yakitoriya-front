import {useEffect, useState, CSSProperties} from 'react'
import './styles.scss'

export const Loader = ({ style }: { style?: CSSProperties })=> {
	const [isHide, setIsHide] = useState(false)
	const [isStarHide, setIsStartHide] = useState(false)

	useEffect(()=> {
		const t = setTimeout(()=> {
			setIsStartHide(true)
			window.scrollTo(0, 0)
			document.body.classList.remove('pre-loader')
		}, 1000)
		return ()=> clearTimeout(t)
	}, [setIsStartHide])
	useEffect(()=> {
		if (isStarHide) {
			const t = setTimeout(()=> {
				setIsHide(true)
			}, 300)
			return ()=> clearTimeout(t)
		}
	}, [setIsHide, isStarHide])
	const cn = style?.position === 'relative' ? 'crane-loader crane-loader_sec' : 'crane-loader'

	if (isHide) return null

	return (
		<div className={cn} style={{ opacity: isStarHide ? 0 : 1, ...style}}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				id="eJLHFlvwja71"
				viewBox="0 0 700 400"
				shapeRendering="geometricPrecision"
				textRendering="geometricPrecision"
				width="700"
				height="400"
			>
				<defs>
					<radialGradient
						id="eJLHFlvwja74-fill"
						cx="0" cy="0" r="0.756533"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="matrix(0.99997 -0.007773 0.00894 1.150131 0.5 0.5)">
						<stop id="eJLHFlvwja74-fill-0" offset="0%" stopColor="#c0f2ff"/>
						<stop id="eJLHFlvwja74-fill-1" offset="100%" stopColor="#64c8e3"/>
					</radialGradient>
					<linearGradient
						id="eJLHFlvwja78-fill"
						x1="0" y1="0.910995" x2="1" y2="0"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja78-fill-0" offset="0%" stopColor="#ef3b5e"/>
						<stop id="eJLHFlvwja78-fill-1" offset="40%" stopColor="#f86553"/>
						<stop id="eJLHFlvwja78-fill-2" offset="100%" stopColor="#ff8a4b"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja79-fill"
						x1="0" y1="0.5" x2="1" y2="1"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja79-fill-0" offset="0%" stopColor="#ef3b5e"/>
						<stop id="eJLHFlvwja79-fill-1" offset="44%" stopColor="#f65a56"/>
						<stop id="eJLHFlvwja79-fill-2" offset="100%" stopColor="#fc774f"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja710-fill"
						x1="0" y1="0" x2="1" y2="0"
						spreadMethod="pad"
						gradientUnits="userSpaceOnUse"
						gradientTransform="matrix(194.938003 -154.189926 154.189926 194.938003 174.125166 403.522925)">
						<stop id="eJLHFlvwja710-fill-0" offset="0%" stopColor="#ef3b5e"/>
						<stop id="eJLHFlvwja710-fill-1" offset="100%" stopColor="#ff8a4b"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill"
						x1="0" y1="0" x2="1" y2="0"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="matrix(0.952167 0.462707 -0.462707 0.952167 0.367256 0.508831)">
						<stop id="eJLHFlvwja711-fill-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-1" offset="100%" stopColor="#42d5fb"/>
						<stop id="eJLHFlvwja711-fill-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g1"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g1-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g1-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g1-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g2"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g2-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g2-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g3"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g3-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g3-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g3-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g4"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g4-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g4-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g5"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g5-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g5-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g5-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g6"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g6-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g6-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g7"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g7-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g7-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g7-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g8"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g8-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g8-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g9"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g9-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g9-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g9-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g10"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g10-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g10-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g11"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g11-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g11-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g11-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g12"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g12-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g12-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g13"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g13-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g13-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g13-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g14"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g14-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g14-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g15"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g15-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g15-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g15-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g16"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g16-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g16-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g17"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g17-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g17-1" offset="19%" stopColor="#4a8bf8"/>
						<stop id="eJLHFlvwja711-fill-g17-2" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g18"
						x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538"
						spreadMethod="pad"
						gradientUnits="objectBoundingBox"
						gradientTransform="translate(0 0)">
						<stop id="eJLHFlvwja711-fill-g18-0" offset="0%" stopColor="#4b86f8"/>
						<stop id="eJLHFlvwja711-fill-g18-1" offset="100%" stopColor="#42d5fb"/>
					</linearGradient>
					<linearGradient
						id="eJLHFlvwja711-fill-g19" x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja711-fill-g19-0" offset="0%" stopColor="#4b86f8"/><stop id="eJLHFlvwja711-fill-g19-1" offset="19%" stopColor="#4a8bf8"/><stop id="eJLHFlvwja711-fill-g19-2" offset="100%" stopColor="#42d5fb"/></linearGradient><linearGradient id="eJLHFlvwja711-fill-g20" x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja711-fill-g20-0" offset="0%" stopColor="#4b86f8"/><stop id="eJLHFlvwja711-fill-g20-1" offset="100%" stopColor="#42d5fb"/></linearGradient><linearGradient id="eJLHFlvwja711-fill-g21" x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja711-fill-g21-0" offset="0%" stopColor="#4b86f8"/><stop id="eJLHFlvwja711-fill-g21-1" offset="19%" stopColor="#4a8bf8"/><stop id="eJLHFlvwja711-fill-g21-2" offset="100%" stopColor="#42d5fb"/></linearGradient><linearGradient id="eJLHFlvwja711-fill-g22" x1="0.367256" y1="0.508831" x2="1.319423" y2="0.971538" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja711-fill-g22-0" offset="0%" stopColor="#4b86f8"/><stop id="eJLHFlvwja711-fill-g22-1" offset="100%" stopColor="#42d5fb"/></linearGradient><linearGradient id="eJLHFlvwja712-fill" x1="117.465207" y1="601.203817" x2="235.308816" y2="352.300492" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja712-fill-0" offset="2%" stopColor="#543bf5"/><stop id="eJLHFlvwja712-fill-1" offset="13%" stopColor="#5156f6"/><stop id="eJLHFlvwja712-fill-2" offset="44.1%" stopColor="#489ef9"/><stop id="eJLHFlvwja712-fill-3" offset="70%" stopColor="#41d2fa"/><stop id="eJLHFlvwja712-fill-4" offset="89.3%" stopColor="#3df3fc"/><stop id="eJLHFlvwja712-fill-5" offset="100%" stopColor="#3cfffc"/></linearGradient><linearGradient id="eJLHFlvwja714-fill" x1="0" y1="0" x2="1" y2="0" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-197.760385 -100.394365 100.394365 -197.760385 305.961872 223.002341)"><stop id="eJLHFlvwja714-fill-0" offset="0%" stopColor="#543bf5"/><stop id="eJLHFlvwja714-fill-1" offset="38%" stopColor="#489ff9"/><stop id="eJLHFlvwja714-fill-2" offset="100%" stopColor="#3cfffc"/></linearGradient><linearGradient id="eJLHFlvwja715-fill" x1="-0.200784" y1="-0.105068" x2="0.839229" y2="0.71069" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="eJLHFlvwja715-fill-0" offset="0%" stopColor="#3cfffc"/><stop id="eJLHFlvwja715-fill-1" offset="57%" stopColor="#44bdfa"/><stop id="eJLHFlvwja715-fill-2" offset="100%" stopColor="#4d76f7"/></linearGradient><radialGradient id="eJLHFlvwja716-fill" cx="0" cy="0" r="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0.5 0.5)"><stop id="eJLHFlvwja716-fill-0" offset="0%" stopColor="#64c8e3"/><stop id="eJLHFlvwja716-fill-1" offset="100%" stopColor="rgba(146,221,241,0)"/></radialGradient></defs><g transform="matrix(.733397 0 0 0.733397 93.31105-25.519577)"><g><rect width="954.46259" height="545.407194" rx="0" ry="0" transform="translate(-127.231295 34.796403)" fill="none" strokeMiterlimit="1"/></g><g transform="translate(31.981803 0)"><g id="eJLHFlvwja76_to" transform="translate(324.379686,265.992198)"><g transform="scale(0.526793,0.526793) translate(-329.5,-307.666504)"><g><polygon points="490,194.833 400.5,385.833 353.424581,239.003349 490,194.833" fill="url(#eJLHFlvwja78-fill)" strokeMiterlimit="1"/><polygon points="490,194.833 464.44219,249.333 555,249.333 490,194.833" fill="url(#eJLHFlvwja79-fill)" strokeMiterlimit="1"/><path id="eJLHFlvwja710" d="M353.424581,239.003349L400.5,385.833L172.395478,459.381084L202,368.833L240.682388,294.129566L353.424581,239.003349Z" fill="url(#eJLHFlvwja710-fill)" strokeMiterlimit="1"/><path id="eJLHFlvwja711" d="M321.220664,138.624761L240.682388,294.129566l112.742193-55.126217-32.203917-100.378588Z" fill="url(#eJLHFlvwja711-fill)" strokeWidth="1.23" strokeMiterlimit="1"/><g id="eJLHFlvwja712_tr" transform="translate(202,368.833) rotate(0)"><path id="eJLHFlvwja712" d="M202,368.833L104,552.333L193,535.833L202,368.833Z" transform="translate(-202,-368.833)" fill="url(#eJLHFlvwja712-fill)" strokeMiterlimit="1"/></g><g transform="matrix(1.182388 0 0 1.182388-59.50829-23.953583)"><path id="eJLHFlvwja714" d="M322,137.333L253.885081,269.017556L130,130.833L322,137.333Z" fill="url(#eJLHFlvwja714-fill)" strokeMiterlimit="1"/><path id="eJLHFlvwja715" d="M322,137.5L253.920633,269.090538L192,63L322,137.5Z" fill="url(#eJLHFlvwja715-fill)" strokeMiterlimit="1"/></g></g></g></g><g id="eJLHFlvwja716_ts" transform="translate(318.018189,545.991068) scale(0.530273,0.530273)"><ellipse rx="179.590139" ry="5.51642" transform="translate(0,0)" fill="url(#eJLHFlvwja716-fill)" strokeWidth="0" strokeMiterlimit="1"/></g></g></g></svg>
		</div>
	)
}
