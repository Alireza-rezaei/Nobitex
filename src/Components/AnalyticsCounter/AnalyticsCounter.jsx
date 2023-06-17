import CountUp from './CountUp/CountUp';
import bgCounter from './../../assets/AnalyticsCounter/bgCounter.png';

export default function AnalyticsCounter() {
	return (
		<div className='w-full flex flex-col md:flex-row justify-evenly items-center bg-gray1000 relative overflow-hidden top-10 md:-top-[5rem] lg:-top-[17rem] h-auto md:h-[11rem] '>
			<img
				src={bgCounter}
				className='absolute w-max h-max top-0 bottom-0 left-0 md:right-10 '
				alt='شمارنده اعداد و ارقام سایت'
			/>
			<div className='w-3/4 md:w-1/3  h-full flex items-center justify-center text-white text-[2.6rem] flex-col py-10 md:py-0'>
				<div className='flex items-center justify-center'>
					{CountUp(4_000_000)}
					<span>+</span>
				</div>
				<h3 className='text-sm'>کاربر فعال</h3>
			</div>
			<div className='w-3/4 md:w-1/3  h-full flex items-center justify-center text-white text-[2.6rem] flex-col py-10 md:py-0'>
				<div className='flex items-center justify-center'>
					{CountUp(200_000_000)}
					<span>+</span>
				</div>
				<h3 className='text-sm'>معاملات انجام شده</h3>
			</div>
			<div className='w-3/4 md:w-1/3  h-full flex items-center justify-center text-white text-[2.6rem] flex-col py-10 md:py-0'>
				<div className='flex items-center justify-center'>
					{CountUp(200_000_000_000)}
					<span>+</span>
				</div>
				<h3 className='text-sm'>حجم معاملات</h3>
			</div>
		</div>
	);
}
