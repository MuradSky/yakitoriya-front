import {ReactNode} from 'react';
import st from '../ContentSecond.module.scss';

interface DescriptionProps {
	data: ApiPrize,
	children: ReactNode
}

export const Description = ({ data, children }: DescriptionProps) => {
	return (
		<div className={st.desc}>
			{data?.description && (
				<>
					<h3>Как получить приз?</h3>
					<p>{data?.description}</p>
				</>
			)}
			{children}
		</div>
	)
}
