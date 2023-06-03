import { Link } from 'react-router-dom';
import nobitexLogo from './../../../../assets/NobitexLogo/Logo.svg';

export default function Logo() {
	return (
		<div className='flex cursor-pointer'>
			<Link to='/'>
				<img src={nobitexLogo} className='mr-3 w-[133px] h-[22px]' alt='Nobitex Logo' />
			</Link>
		</div>
	);
}
