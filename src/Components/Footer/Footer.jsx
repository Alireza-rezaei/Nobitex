import { BsFillTelephoneFill } from 'react-icons/bs';
import Button from './../Header/Navbar/LoginButton/Login';
import { Container } from '@mui/system';
import AccordionMenu from './AccordionMenu/AccordionMenu';
import JoinUs from './JoinUs/JoinUs';
import Logo from './../Header/Navbar/Logo/Logo';
import Login from './../Header/Navbar/LoginButton/Login';
export default function Footer() {
	return (
		<footer>
			<div className='w-full flex items-start justify-center bg-dark h-[28rem] relative top-[2.5rem] md:-top-[10rem] lg:-top-[19rem]'>
				<Container className='flex flex-col md:flex-row justify-between items-center'>
					<div className='flex flex-col md:flex-row justify-between items-center  w-full  mt-3 md:m-3 rounded-md bg-gray1000'>
						<p className='text-white text-[.8rem] md:text-base text-center my-1 md:my-0 w-full md:w-max flex items-center justify-center'>
							<BsFillTelephoneFill className='mx-2 text-lg' />
							هفت روز هفته، 24 ساعت شبانه روز در کنار شما هستیم
						</p>
						<div className='flex items-start justify-center w-max'>
							<Button
								title={'تماس با ما'}
								width='w-max'
								margin='mx-2 my-2'
								bgColor='bg-transparent'
								className='border-white  text-xs md:text-base transition-all duration-400'
								padding='px-4 md:px-6 py-[.43rem] md:py-3'
							/>
							<Button
								title={'سوالات متداول'}
								width='w-max'
								margin='ml-2 my-2'
								padding='px-4 md:px-6 py-2 md:py-3'
								className='hover:bg-violet-700 text-xs md:text-base transition-all duration-400 border-none '
							/>
						</div>
					</div>
					<div className='block md:flex md:items-start md:justify-start px-3 h-[20rem] overflow-auto '>
						<AccordionMenu
							title='نوبیتکس'
							items={{
								items: [
									'درباره ما',
									'نوبیتکس مگ',
									'قوانین و مقررات',
									'گزارش سال 2022',
									'فرصت های شغلی',
								],
								link: ['/about', '/mag', '/terms', '/annual-report/2022'],
							}}
						/>
						<AccordionMenu
							title='امکانات'
							items={{
								items: [
									'دانلود اپلیکیشن',
									'بازار آزمایشی نوبیتکس',
									'معرفی به دوستان',
									'مستندات API',
									'گزارش تغیرات',
								],
								link: ['/application', 'testnet', '/policies/referral/', '/apidocs', '/changes'],
							}}
						/>
						<AccordionMenu
							title='راهنما'
							items={{
								items: [
									'سوالات متداول',
									'احراز هویت و سطوح کاربری',
									'قیمت ها و کارمزد ها',
									'امنیت حساب کاربری',
									'امنیت کیف پول',
								],
								link: ['/faq', '/policies/user-levels', '/pricing', '/security'],
							}}
						/>
						<AccordionMenu
							title='ارتباط با ما'
							items={{
								items: ['تماس با ما', 'انتقادات و پیشنهادات', 'support@nobitex.ir '],
								link: ['/contact-us', '/feedbacks-and-suggestions', 'mailto:support@nobitex.ir'],
							}}
						>
							<JoinUs isShow={`hidden md:block`} />
						</AccordionMenu>
						<JoinUs
							isShow={`block md:hidden text-center flex flex-col items-center justify-center mt-4`}
						/>
						<div className='bg-gray1000 flex justify-between items-center mb-5 p-2 md:hidden'>
							<div className='w-full block'>
								<Logo />
							</div>
							<Login
								width={`w-max`}
								title='دانلود اپلیکیشن'
								className='mr-auto hover:bg-violet-700'
							/>
						</div>
					</div>
					<p className='w-full text-center text-white text-base relative -top-9 md:-top-[6rem]'>
						© 2016-2023 NOBITEX, v4.35.0
					</p>
				</Container>
			</div>
		</footer>
	);
}
