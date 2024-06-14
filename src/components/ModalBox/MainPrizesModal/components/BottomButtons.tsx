import {useCallback, useEffect, useRef, useState} from 'react'
import {Button, Tooltip} from 'components/UI'
import {usePrizesStore} from 'store'
import st from '../ContentSecond.module.scss'
import {QRModal} from './QRModal';

interface BottomButtonsProps {
	data: ApiPrize
}

const availableCodes = [2,5,6,7,8,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]

export const BottomButtons = ({ data }: BottomButtonsProps) => {
	const blockRef = useRef<any>(null)
	const parentBlock = useRef<any>(null)
	useEffect(()=> {
		parentBlock.current = blockRef.current.closest('#prize-box')
	})

	const [qrValue, setQrValue] = useState('')
	const { addPrizeOpen, addOpenQr, isOpenQr}: TPrizes = usePrizesStore()
	const onClosed = useCallback(()=> addPrizeOpen({isOpen: false, id: 0}), [])

	const onOpenQR = useCallback(()=> {
		setQrValue(data.gift_code)
		addOpenQr(true)
	},[isOpenQr, data])

	const onCloseQR = useCallback(()=> {
		setQrValue('')
		addOpenQr(false)
	},[isOpenQr])

	const isAvailableCode = availableCodes.indexOf(data.id) !== -1

	return (
	    <div className={st.desc_row} ref={blockRef}>
		    <Button onClick={onClosed}>Супер!</Button>

		    {isAvailableCode &&
                <Button variant="empty" onClick={onOpenQR}>
                    <Tooltip title="Показать QR-код" flow="top">
                        QR-код
                    </Tooltip>
                </Button>
		    }

			<QRModal value={qrValue} onClose={onCloseQR} parentBlock={parentBlock.current} />
	    </div>
    )
}
