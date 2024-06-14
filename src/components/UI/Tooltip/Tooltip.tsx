import {ReactNode} from 'react'
import {reformCn} from 'utils'
import './styles.scss'

interface TooltipProps {
	title: string,
	flow: string,
	children: ReactNode
	className?: string
}

export const Tooltip = ({ title, flow, children, className='' }: TooltipProps) => {
	const cn = reformCn('tooltip-box', className ? className : '')

	return (
		<span className={cn} data-flow={flow} data-tooltip={title}>
			{children}
		</span>
	)
}
