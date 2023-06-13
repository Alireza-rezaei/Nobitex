import PropTypes from 'prop-types';

export default function WhyNobitexItem({ imageSrc, title, description }) {
	return (
		<div className='relative flex justify-center items-center w-auto flex-col'>
			<img src={imageSrc} alt='Why Nobitex' />
			<h4 className='text-lg p-2 pt-7'>{title}</h4>
			<p className='pb-4 px-4 text-center text-slate-500 w-10/12 md:w-full lg:w-10/12'>{description}</p>
		</div>
	);
}

WhyNobitexItem.propTypes = {
	imageSrc: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};
