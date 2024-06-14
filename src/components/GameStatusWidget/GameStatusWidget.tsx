import {useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import useSWR from 'swr';
// import Icon1 from 'assets/images/svg/icon-wg-1.svg?react'
import Icon2 from 'assets/images/svg/icon-wg-2.svg?react'
import Icon3 from 'assets/images/svg/icon-wg-3.svg?react'
import Clear from 'assets/images/svg/clear.svg?react'
import st from './GameStatusWidget.module.scss'
import {useScreenSize} from 'hooks';
import {ToTheTop} from '../ToTheTop';
import axios from 'axios';

const fetcher = async (url: string)=> {
	return await axios.get(url).then(({data}) => data.data)
}

export const GameStatusWidget = () => {
	const { isMobile } = useScreenSize()
	const { data } = useSWR('/widget', fetcher)
	const blockRef = useRef<any>(null)
	const [isHide, setIsHide] = useState(false)

	return createPortal(
		<div className={st.widget} ref={blockRef}>
			{!isMobile && <ToTheTop block={blockRef.current}  />}
			{!isHide &&
                <div className={st.wrap}>
                    <button className={st.close} onClick={()=> setIsHide(true)}>
                        <Clear/>
                    </button>
                    {/*<div className={st.item}>*/}
                    {/*    <Icon1 />*/}
                    {/*    <div className={st.text}>*/}
                    {/*        <strong>{data?.users_count || 0}</strong>*/}
                    {/*        <span>участников</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={st.item}>
                        <Icon2 />
                        <div className={st.text}>
                            <strong>{data?.used_prizes || 0}</strong>
                            <span>призов разыграно</span>
                        </div>
                    </div>
                    <div className={st.item}>
                        <Icon3 />
                        <div className={st.text}>
                            <strong>{data?.prizes_left || 0}</strong>
                            <span>призов осталось</span>
                        </div>
                    </div>
                </div>
			}
		</div>,
		document.body
	)
}

export default GameStatusWidget
