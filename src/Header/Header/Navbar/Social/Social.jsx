import PropTypes from 'prop-types';

export default function Social({ socialLink, children }) {
	return (
		<button className='flex items-center justify-center w-7 h-7 cursor-pointer mx-3'>
			<a className='w-full h-full' href={socialLink} target='_blank' rel='noopener noreferrer'>
				{children}
			</a>
		</button>
	);
}

Social.propTypes = {
	socialLink: PropTypes.string,
	children: PropTypes.string,
};
