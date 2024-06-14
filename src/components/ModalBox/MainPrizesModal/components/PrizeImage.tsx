import st from '../ContentSecond.module.scss';
import qrCode from 'assets/qr-code.png';

interface PrizeImageProps {
	data: ApiPrize
}

export const PrizeImage = ({ data }: PrizeImageProps) => {
	return (
		<>
			{data?.image?.path &&
                <div className={st.image}>
                    <img src={data?.image?.path} alt="" width={200} height={133} />
                </div>
			}

			{data?.id === 15 &&
                <div className={st.quar}>
                    <img src={qrCode} alt="" width={460} height={460} loading="lazy" />
                </div>
			}
		</>
	)
}
