import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LearnMoreItem({ icon, title }) {
	return (
		<div className='flex items-center justify-center p-4 cursor-pointer w-1/2 md:w-3/12 '>
			<Link to='/help' className='w-full flex items-center justify-center flex-col group'>
				<div className='flex items-center justify-center w-[7rem] h-[7rem] mb-5 rounded-full border-[.8rem] border-slate-200 transition-all group-hover:border-[.5rem] group-hover:border-purple'>
					<img src={icon} alt={title} />
				</div>
				<h4 className='text-center text-md md:text-lg font-medium text-dark group-hover:text-purple'>{title}</h4>
			</Link>
		</div>
	);
}

LearnMoreItem.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
