import PropTypes from 'prop-types';
import './FacilitiesItem.scss';

export default function FacilitiesItem({ icon, title, description }) {
	return (
		<div className='flex items-center justify-center w-full'>
			<div className='w-[6rem] flex items-center justify-center'>
				<div className='icon p-2 bg-white rounded-[50%] flex items-center justify-center '>
					<img className='' src={icon} alt='Facilities item' />
				</div>
			</div>
			<div className='flex flex-col items-start justify-start p-4 w-9/12'>
				<h4 className='text-md md:text-lg lg:text-xl p-2'>{title}</h4>
				<p className='text-sm md:text-[1rem] text-slate-700 p-2 md:w-3/4 lg:w-full'>{description}</p>
			</div>
		</div>
	);
}

FacilitiesItem.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};
