import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

type SelectTabs = {
	id: number,
	type: null | 'main',
	drew_at: string,
	is_current: boolean,
	is_finished: boolean,
	period: string,
	winners: Array<any>
}

const selectTabs = (item: SelectTabs)=>  ({
	id: item.id,
	type: item.type || null,
	drew_at: item?.drew_at,
	is_current: item?.is_current,
	is_finished: item?.is_finished,
	period: item?.period?.replace(/\s/g, ''),
	is_completed: !!item?.winners?.length || false,
	winners: item.winners
})

const transferByPromise = (data: any)=> new Promise(async (resolve, reject)=> {
	try {
		const dataWinners = [...data].reverse()

		dataWinners.push({
			id: dataWinners[dataWinners.length-1].id + 1,
			type: 'main',
			is_current: false,
			is_finished: false,
			period: null,
			start_at: null,
			finish_at: null,
			drew_at: null,
			winners: [
				{
					name: 'Мария',
					phone: '+7 *** ***-3381',
					prize: '1 000 000 рублей!',
					drew_at: '12.01.2024'
				}
			],
		})

		const tabs: any = dataWinners.map(selectTabs)
		const currentId = tabs && [...tabs].reverse().find((item: any) => item.is_completed && item.type !== 'main')?.id
		resolve({tabs, dataWinners, currentId })
	} catch (e) {
		reject(e)
	}
})

const fetcher = async (url: string)=> await axios.get(url)

export const useWinners = ()=> {
	const { data } = useSWRImmutable('/winners', fetcher)
	const [winnersAll, setWinnersAll] = useState<any>(null)
	const [winners, setWinners] = useState<any>(null)
	const [tabs, setTabs] = useState<any>(null)
	const [tab, setTab] = useState<null | number>(null)
	const [search, setSearch] = useState('')
	const [isEmpty, setIsEmpty] = useState<boolean>(false)
	const [isNotCompleted, setIsNotCompleted] = useState<boolean>(false)

	useEffect(()=> {
		if (data?.data?.data) {
			transferByPromise(data?.data?.data)
				.then(({ tabs, currentId }: any)=> {
					setTabs(tabs)
					setTab(currentId)
				})
		}
	}, [data, setTabs, setTab])

	useEffect(()=> {
		if (tabs && tab !== null) {
			const dataWinners = tabs.find((item: any) => item.id === tab)
			if (dataWinners?.winners && dataWinners?.winners?.length === 0) {
				return setIsNotCompleted(true)
			}
			setWinnersAll(dataWinners?.winners)
			setWinners(dataWinners?.winners.slice(0, 10))
			setIsNotCompleted(false)
		}
	}, [tabs, tab, setWinners, setIsNotCompleted])


	const onTabChange = useCallback((id: number)=> setTab(id),[])
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
		const value = e.target.value.toLowerCase()
		const wins = winnersAll.filter((item: any) => (
			item.name.toLowerCase().includes(value)
			|| item.phone.toLowerCase().includes(value)
		))
		setIsEmpty(wins.length === 0 ? true : false)
		setWinners(wins.slice(0, 10))
		setSearch(value)
	}, [winnersAll])

	const onMore = useCallback(()=> {
		if (data?.data?.data) {
			setWinners(winnersAll.slice(0, winners.length + 10))
		}
	}, [winners, winnersAll])

	console.log(tab)

	return {
		search,
		isEmpty,
		isNotCompleted,
		isMoreHide: winners?.length < 10 || winners?.length === winnersAll?.length,
		winners,
		tab,
		tabs,
		onTabChange,
		onChange,
		onMore,
	}
}
