import CountUp from './CountUp/CountUp';
import bgCounter from './../../assets/AnalyticsCounter/bgCounter.png';
import { useState } from 'react';

export default function AnalyticsCounter() {
	const [isCounting, setIsCounting] = useState(true);
	setTimeout(() => {
		setIsCounting(false);
	}, 6000);
	return (
		<div className='w-full flex justify-evenly items-center bg-gray1000 relative overflow-hidden top-10 md:-top-[5rem] lg:-top-[17rem] h-[11rem]'>
			<img src={bgCounter} className='absolute w-max h-max right-10' alt='شمارنده اعداد و ارقام سایت' />
			<div className='w-1/3 h-full flex items-center justify-center text-white text-[2.6rem] flex-col'>
				<div className='flex items-center justify-center'>
					{CountUp(4_000_000, isCounting)}
					<span>+</span>
				</div>
				<h3 className='text-xl'>کاربر فعال</h3>
			</div>
			<div className='w-1/3 h-full flex items-center justify-center text-white text-[2.6rem] flex-col'>
				<div className='flex items-center justify-center'>
					{CountUp(4_000_000_000, isCounting)}
					<span>+</span>
				</div>
				<h3 className='text-xl'>کاربر فعال</h3>
			</div>
			<div className='w-1/3 h-full flex items-center justify-center text-white text-[2.6rem] flex-col'>
				<div className='flex items-center justify-center'>
					{CountUp(200_000_000_000, isCounting)}
					<span>+</span>
				</div>
				<h3 className='text-xl'>کاربر فعال</h3>
			</div>
		</div>
	);
}
