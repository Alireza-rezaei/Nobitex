/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import fetchCryptocurrencyData from './FetchCryptoCurrencyData/FetchCryptoCurrencyData';

export default function CryptoCurrencyPriceTable() {
	const [coins, setCoins] = useState([]);
	const [vsCurrency, setVsCurrency] = useState('IRT');
	const [exchangeRate, setExchangeRate] = useState('10');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchCryptocurrencyData({ perPage: 6, page: 1 });
				setCoins(data);
			} catch (error) {
				console.error('Error fetching cryptocurrency data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchExchangeRate = async () => {
			try {
				const response = await fetch(
					'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/irr.json',
				); // Replace with the actual API endpoint for exchange rate
				const data = await response.json();
				setExchangeRate(data.irr.toString()); // Set the exchange rate from the API response
			} catch (error) {
				console.error('Error fetching exchange rate:', error);
			}
		};

		fetchExchangeRate();
	}, []);

	if (coins.length === 0) {
		return (
			<div className='flex items-center justify-center -top-[16rem] mx-auto z-20 relative'>
				<div className='w-4 h-4 rounded-full animate-pulse bg-violet-400'></div>
				<div className='w-4 h-4 rounded-full animate-pulse bg-violet-400'></div>
				<div className='w-4 h-4 rounded-full animate-pulse bg-violet-400'></div>
			</div>
		);
	}

	return (
		<div className='w-full flex justify-start content-center relative md:-top-[8rem] lg:-top-[23rem] z-20 flex-col'>
			<div className='flex items-center justify-start w-[92vw] md:w-[22rem] h-[3.5rem] bg-white rounded-lg mr-0'>
				<div className='px-2 flex justify-evenly items-center w-full'>
					<h2 className='text-dark font-normal text-md xsm:text-[.9rem] md:text-[1rem]'>
						انتخاب بازار بر اساس
					</h2>
					<div className='w-1/2 flex justify-center items-center flex-nowrap'>
						<button
							onClick={() => setVsCurrency('IRT')}
							className={`${
								vsCurrency === 'IRT'
									? 'text-white bg-warmGray-500'
									: 'text-warmGray-500 bg-warmGray-300'
							} py-1.5 px-3 rounded-r-md text-md transition-all xsm:text-[0.7rem] whitespace-nowrap`}
						>
							تومان IRT
						</button>
						<button
							onClick={() => setVsCurrency('USDT')}
							className={`${
								vsCurrency === 'USDT'
									? 'text-white bg-warmGray-500'
									: 'text-warmGray-500 bg-warmGray-300'
							} py-1.5 px-3 rounded-l-md text-md transition-all xsm:text-[0.7rem] whitespace-nowrap`}
						>
							تتر USDT
						</button>
					</div>
				</div>
			</div>

			<div className='w-full bg-white shadow-md rounded-md rounded-tr-none top-2 md:-top-1 relative'>
				<table className='w-full'>
					<thead className='w-full text-sm font-light text-slate-400 border-b border-slate-300'>
						<tr>
							<th className='text-start p-2 pr-20'>نام</th>
							<th className='text-start p-2'>آخرین قیمت</th>
							<th className='text-start p-2'>تغییر 24h</th>
							<th className='text-start p-2 hidden md:table-cell'>نمودار هفتگی</th>
							<th className='text-start p-2 hidden md:table-cell'> </th>
						</tr>
					</thead>
					<tbody>
						{coins.map((coin) => (
							<CoinRow
								key={coin.id}
								coin={coin}
								vsCurrency={vsCurrency}
								exchangeRate={exchangeRate}
							/>
						))}
						{coins.length === 0 && (
							<tr>
								<td colSpan='5' className='text-center'>
									No coins found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
				<Link
					to='/current-prices/'
					className='w-full block text-center p-2 text-purple col-span-full hover:text-b'
				>
					<div className='relative p-5'>
						<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
							نمایش همه بازار <MdKeyboardArrowLeft />
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

function CoinRow({ coin, vsCurrency, exchangeRate }) {
	const formatPrice = (price) => {
		if (vsCurrency === 'USDT') {
			return `$${price.toLocaleString()}`;
		} else if (vsCurrency === 'IRT' && exchangeRate) {
			const formattedPrice = (Number(price.toFixed(0)) * parseInt(exchangeRate.replace(',', ''), 10)).toLocaleString(
				'en-US',
			);
			return `${formattedPrice}`;
		} else {
			return '';
		}
	};

	const formatPercentage = (percentage) => {
		const formattedPercentage = percentage.toFixed(2);
		if (percentage < 0) {
			return <span className='bg-rose-200 rounded pb-1'>-{formattedPercentage.slice(1)}%</span>;
		} else {
			return <span className='bg-emerald-200 rounded pb-1'>+{formattedPercentage}%</span>;
		}
	};

	return (
		<tr className='table-row border-b border-slate-300'>
			<td className='flex items-center p-2 md:p-4'>
				<img className='w-10 mx-2 space-y-2' src={coin.image} alt='Coin Icon' />
				<span className='text-xl font-medium text-dark ml-5'>{coin.symbol}</span>
				<span className='text-md text-slate-500 xsm:hidden '>{coin.name}</span>
			</td>
			<td>{formatPrice(coin.current_price)}</td>
			<td
				className={`${
					coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'
				} pl-0 md:pl-[2rem] lg:pl-[4rem]`}
			>
				<span className='flex justify-between w-max' dir='ltr'>
					{formatPercentage(coin.price_change_percentage_24h)}
				</span>
			</td>
			<td className='hidden md:table-cell'>
				<img
					data-v-0b9a90db=''
					src='https://nobitex.ir/cdn/charts/btc.svg'
					loading='lazy'
					alt='نمودار قیمت'
					title='نمودار قیمت'
					className='currencyWeeklyChart'
					width='115'
					height='35'
				/>
			</td>
			<td className='w-2/12 text-center hidden md:table-cell'>
				<button className='px-3.5 py-2 rounded-md border border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-white transition-all'>
					خرید و فروش
				</button>
			</td>
		</tr>
	);
}
