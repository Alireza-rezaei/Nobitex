import Login from '../Header/Navbar/LoginButton/Login';
import LandingPicture from './LandingPicture/LandingPicture';
// import { AiFillPlayCircle } from 'react-icons/ai';
export default function Landing() {
	return (
		<div className='w-full flex items-center justify-center relative '>
			<div className='w-full flex items-center justify-center h-auto'>
				<div className='lg:h-[1000px] mt-[17rem] lg:mt-0 flex overflow-hidden lg:overflow-visible relative items-center justify-center'>
					<LandingPicture />
				</div>
				<header className='absolute top-0 left-0 right-0 w-full bg-gray flex items-center justify-center flex-col'>
					<h1 className='text-dark font-medium text-center text-2xl lg:text-[2.6rem] mt-[4.5rem] mb-2 z-20'>
						خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
					</h1>
					<h3 className='text-dark font-normal text-center text-lg lg:text-2xl mb-8 z-20'>
						به بزرگترین بازار ارز دیجیتال ایران بپیوندید
					</h3>
					<div className='flex flex-row items-center justify-center z-20'>
						<Login
							to='/signup/'
							className='hover:bg-violet-800'
							title='ثبت نام'
							width='w-[7rem]'
							padding='px-2 py-2'
							margin=' mx-2 mb-5'
							bgColor='bg-purple'
						/>
						<Login
							to='/login/'
							className='hover:bg-violet-800 z-20'
							title='ورود'
							width='w-[7rem]'
							padding='px-2 py-2'
							margin=' mx-1 mb-5'
							bgColor='bg-gray'
							textColor='text-purple'
						/>
					</div>
					<div className='relative flex items-center justify-center group'>
						<button className='text-purple flex items-center justify-center z-20 text-xl relative pr-5 py-1 group-hover:text-white'>
							نوبیتکس چطور کار می‌کند؟
							<span className='relative w-7 h-7 rounded-full border-purple border-2 mr-1 group-hover:top-0 group-hover:left-5 group-hover:w-0 group-hover:h-0 transition-all duration-300 group-hover:opacity-0'></span>
							<span className='absolute top-2 left-2.5 -z-10 rounded-sm border-l-purple border-l-[15px] border-r-transparent border-r-[10px] duration-300 border-b-transparent border-b-[10px]  border-t-transparent border-t-[10px] transition-all group-hover:border-l-[15rem] group-hover:border-b-[2.2rem] group-hover:border-r-[10px] group-hover:border-t-[10px] group-hover:border-r-purple group-hover:border-t-purple group-hover:border-b-purple group-hover:-top-[.3rem] group-hover:-left-[1rem]'></span>
						</button>
					</div>
				</header>
			</div>
		</div>
	);
}
