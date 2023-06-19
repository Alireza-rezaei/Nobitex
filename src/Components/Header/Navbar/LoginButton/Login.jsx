import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Login({
	title,
	to,
	className = '',
	width,
	margin,
	padding = 'p-[0.5rem]',
	bgColor = 'bg-purple',
	textColor = 'text-white',
	radius = 'rounded-md ',
}) {
	return (
		<div className='w-full flex items-center justify-center'>
			<Link to={to} className='w-full block '>
				<button
					className={`${width} ${margin} ${bgColor} ${textColor} ${padding} ${className} ${radius} transition-all text-sm border border-purple hover:text-white flex items-center justify-center`}
				>
					{title}
				</button>
			</Link>
		</div>
	);
}

Login.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
	className: PropTypes.string,
	width: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	radius: PropTypes.string,
};
