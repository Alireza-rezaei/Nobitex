import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartSimple, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { HiAcademicCap } from 'react-icons/hi';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import ToggleBtn from '../../../Components/ToggleButton/ToggleBtn';
import './Navlink.scss';
import Social from '../Social/Social';

export default function NavLink({ direction = 'col', margin, textColor }) {
	const [showSubMenu, setShowSubMenu] = useState(false);

	return (
		<>
			<div
				className={`flex w-full flex-col items-start justify-start mb-3 lg:mb-0	 ${margin} relative landscape:overflow-auto lg:landscape:overflow-visible`}
			>
				<ul
					style={{
						WebkitTapHighlightColor: 'transparent',
					}}
					className={`flex items-start justify-start flex-${direction} lg:mb-0 w-full relative`}
				>
					<li
						onClick={() => setShowSubMenu((prev) => !prev)}
						className={`prices flex items-center justify-center text-[.9rem] lg:px-5 group hover:text-purple transition-all duration-300 py-2 lg:py-2 tracking-tight relative ${textColor} cursor-pointer font-normal`}
					>
						<FontAwesomeIcon
							icon={faChartSimple}
							className={`lg:hidden block text-2xl mr-2 ml-4 text-slate-400 relative -top-1 w-7 h-7`}
						/>
						قیمت لحظه‌ای رمز ارزها
						<IoMdArrowDropdown
							className={` ${
								showSubMenu ? 'rotate-180' : 'rotate-0'
							} text-lg absolute top-5 -left-5 lg:-left-1 lg:top-2`}
						/>
					</li>
					<div
						className={`prices__box absolute opacity-0 lg:opacity-100 top-10 bg-white w-full origin-top lg:w-[10rem]  lg:right-3 lg:top-9 text-sm shadow-2xl border border-slate-100 rounded-lg lg:rounded-md h-auto ${
							showSubMenu ? 'block opacity-100' : 'hidden opacity-0'
						}`}
					>
						<ul className='flex items-start justify-start p-2 mt-1 flex-col font-normal'>
							<Link
								to='/btc/'
								className={`hover:bg-slate-100 hover:text-purple block w-full rounded-lg`}
							>
								<li className={`p-1.5`}>بیت کوین</li>
							</Link>
							<Link
								to='/usdt/'
								className={`hover:bg-slate-100 hover:text-purple block w-full rounded-lg`}
							>
								<li className={`p-1.5`}>تتر</li>
							</Link>
							<Link
								to='/eth/'
								className={`hover:bg-slate-100 hover:text-purple block w-full rounded-lg`}
							>
								<li className={`p-1.5`}>اتریوم</li>
							</Link>
							<Link
								to='/xrp/'
								className={`hover:bg-slate-100 hover:text-purple block w-full rounded-lg mb-2`}
							>
								<li className={`p-1.5`}>ریپل</li>
							</Link>
							<div className='w-full relative block border rounded-lg border-slate-200'></div>
							<Link to='/prices/' className={`hover:bg-slate-100 block w-full rounded-lg p-1 mt-2`}>
								<li>سایر ارزهای دیجیتال</li>
							</Link>
						</ul>
					</div>
					<Link to='/help/'>
						<li
							className={`flex items-center justify-center text-[.9rem] lg:px-5 hover:text-purple py-4 lg:py-2 tracking-tight relative ${textColor} font-normal ${
								window.innerWidth < 1000 && showSubMenu ? 'top-[12rem]' : 'top-0'
							}`}
						>
							<HiAcademicCap
								className={`lg:hidden block text-2xl mr-2 ml-4 text-slate-400 relative -top-1 w-7 h-7`}
							/>
							راهنمای استفاده
						</li>
					</Link>
					<Link to='/mag/'>
						<li
							className={`flex hover:text-purple items-center justify-center text-[.9rem] lg:px-5 py-4 lg:py-2 tracking-tight relative ${textColor} font-normal ${
								window.innerWidth < 1000 && showSubMenu ? 'top-[12rem]' : 'top-0'
							}`}
						>
							<FontAwesomeIcon
								icon={faBook}
								className={`lg:hidden block text-2xl mr-2 ml-4 text-slate-400 relative -top-1 w-7 h-7`}
							/>
							مجله
						</li>
					</Link>
					<Link to='/policies/referral/'>
						<li
							className={`flex items-center justify-center hover:text-purple text-[.9rem] lg:px-5 py-2 lg:py-2 tracking-tight relative ${textColor} font-normal ${
								window.innerWidth < 1000 && showSubMenu ? 'top-[12rem]' : 'top-0'
							}`}
						>
							<FontAwesomeIcon
								icon={faUserPlus}
								className={`lg:hidden block text-2xl mr-2 ml-4 text-slate-400 relative -top-1 w-7 h-7 `}
							/>
							معرفی به دوستان
						</li>
					</Link>
					<div
						className={`w-full relative block lg:hidden border rounded-lg h-0.5 border-slate-500 ${
							showSubMenu ? 'top-[12rem]' : 'top-10'
						}`}
					></div>
					<div
						className={`flex flex-row mt-4 lg:hidden justify-between relative w-full ${
							showSubMenu ? 'top-[12rem]' : 'top-10'
						}`}
					>
						<ToggleBtn title='حالت تاریک' />
						<ToggleBtn title='English' />
					</div>
				</ul>
			</div>
			<div className='flex portrait:hidden sm:landscape:flex lg:landscape:hidden items-center justify-center w-full bg-white py-6 px-3 h-[2rem] lg:hidden'>
				<Social socialLink='https://instagram.com/alreza.rz?igshid=ZDc4ODBmNjlmNQ=='>
					<AiFillInstagram className='w-7 h-7 text-slate-600 hover:text-purple rounded-full' />
				</Social>
				<Social socialLink='https://www.facebook.com/profile.php?id=100050301842479&mibextid=ZbWKwL'>
					<AiFillFacebook className='w-7 h-7 text-slate-600 hover:text-purple rounded-full' />
				</Social>
				<Social socialLink='https://www.linkedin.com/in/alireza-rezaei-47a67b1b0'>
					<AiFillLinkedin className='w-7 h-7 text-slate-600 hover:text-purple rounded-full' />
				</Social>
				<Social socialLink='https://twitter.com/alreza_rz?t=Nd-4ZLC1mIxE3RgfoBipcg&s=09'>
					<AiFillTwitterCircle className='w-7 h-7 text-slate-600 hover:text-purple rounded-full' />
				</Social>
				<Social socialLink='https://twitter.com/alreza_rz?t=Nd-4ZLC1mIxE3RgfoBipcg&s=09'>
					<RiTelegramFill className='w-7 h-7 text-slate-600 hover:text-purple rounded-full' />
				</Social>
			</div>
		</>
	);
}

NavLink.propTypes = {
	direction: propTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
	className: propTypes.string,
	margin: propTypes.string,
	textColor: propTypes.string,
};
