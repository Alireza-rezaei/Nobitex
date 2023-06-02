import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsBoxArrowRight } from 'react-icons/bs';
import Login from './LoginButton/Login';
import NavLink from './NavLink/NavLink';
import Logo from './Logo/Logo';

export default function Navbar() {
	const [menuStyle, setMenuStyle] = useState({ opacity: 0, transform: 'translateX(20rem)' });
	const [showSubMenu, setShowSubMenu] = useState(false);

	const showMenu = () => {
		setMenuStyle({ opacity: 1, transform: 'translateX(0)' });
		setShowSubMenu(true);
	};

	const hideMenu = () => {
		setMenuStyle({ opacity: 0, transform: 'translateX(20rem)' });
		setShowSubMenu(false);
	};

	return (
		<nav
			className='flex flex-row items-center justify-between p-4 flex-wrap relative '
			style={{ WebkitTapHighlightColor: 'transparent' }}
		>
			<div
				className={` ${
					showSubMenu ? 'opacity-70' : 'opacity-0 hidden'
				} fixed inset-0 bg-dark  z-10 duration-500 ease-in-out transition-all`}
			></div>
			<div className='flex flex-col lg:hidden'>
				<button onClick={showMenu} className='cursor-pointer my-1'>
					<BiMenu className='text-4xl text-white' />
				</button>
				<div
					style={menuStyle}
					className='w-[19rem] absolute top-0 right-0 bg-white flex duration-500 ease-in-out z-20 transition-all'
				>
					<div className='w-10/12 h-screen mx-auto flex flex-col justify-start'>
						<button onClick={hideMenu} className='top-4 mb-3 relative'>
							<BsBoxArrowRight className='text-slate-400  text-2xl relative mr-2' />
						</button>
						<div className='flex flex-col h-full overflow-hidden'>
							<Login
								to='/login/'
								className='hover:bg-violet-800'
								title='ورود'
								width='w-11/12'
								margin='mt-4'
								bgColor='bg-white'
								textColor='text-purple'
							/>
							<Login
								className='hover:bg-violet-800'
								to='/signup/'
								title='ثبت نام'
								width='w-11/12'
								margin='mt-4'
							/>
							<NavLink direction='col' margin='mt-10' />
						</div>
					</div>
				</div>
			</div>
			<Logo />
			<div className='hidden lg:flex lg:w-8/12 2xl:w-9/12 '>
				<NavLink direction='row' margin='m-0' textColor='text-white' />
			</div>
			<div className='w-[5rem] sm:w-[10rem] md:ml-3 flex items-center justify-center'>
				<Login
					to='/login/'
					title='ورود'
					className='hidden sm:flex border-none hover:bg-dark text-white'
					width='w-[5rem]'
					margin='mt-0 mx-1'
					padding='px-3 py-[0.5rem]'
					bgColor='bg-dark'
				/>
				<Login
					to='/signup/'
					className='hover:bg-violet-800'
					title='ثبت نام'
					width='w-[5rem]'
					margin='mt-0'
					padding='px-3 py-[0.5rem]'
					bgColor='bg-purple'
				/>
			</div>
		</nav>
	);
}
