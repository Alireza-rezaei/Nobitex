import ProfitImage from './../../assets/ProfitImages/Profit.png';
import Login from '../Header/Navbar/LoginButton/Login';
import { Container } from '@mui/system';

export default function Profit() {
	return (
		<div className='bg-lightPink flex flex-row relative top-10 md:-top-[5rem] lg:-top-[17rem] w-full h-auto md:h-[20rem]'>
			<Container>
				<div className='flex flex-col md:flex-row relative w-full '>
					<div className='title w-full h-auto md:h-[15rem] relative flex order-10 md:order-1 items-center md:my-auto flex-col justify-evenly mr-0 md:mr-6'>
						<h3 className='text-lg md:text-3xl w-full text-center md:text-start font-medium'>
							{' '}
							در سود نوبیتکس سهیم شوید{' '}
						</h3>
						<p className='text-dark text-sm md:text-lg w-full text-center md:text-start my-4'>
							با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند برای همیشه تا 30% از
							کارمزد معاملاتشان از طرف نوبیتکس به شما تعلق می‌گیرد{' '}
						</p>
						<Login
							to='/policies/referral/'
							width='w-10/12 md:w-auto'
							margin='mx-auto md:mx-0 mb-5'
							padding='px-6 py-2'
							title={`بیشتر بدانید`}
							radius=' rounded-3xl '
							className='hover:bg-violet-700'
						/>
					</div>
					<div className='flex flex-col items-center justify-center -order-10 md:order-1 lg:flex-row w-full relative p-2 -top-[3rem] md:-top-[4.5rem]'>
						<img src={ProfitImage} alt='سود بیشتر' />
					</div>
				</div>
			</Container>
		</div>
	);
}
