import PropTypes from 'prop-types';
export default function ToggleBtn({ title }) {
	return (
		<label
			className='relative inline-flex items-center cursor-pointer'
			style={{
				WebkitTapHighlightColor: 'transparent',
				WebkitTouchCallout: 'none',
				WebkitUserSelect: 'none',
				MozUserSelect: 'none',
				msUserSelect: 'none',
				userSelect: 'none',
			}}
		>
			<input
				type='checkbox'
				value=''
				className='sr-only peer peer-checked:ring-offset-transparent peer-focus:outline-none appearance-none outline-none'
			/>
			<span className='ml-3 text-sm font-normal text-gray-900 '>{title}</span>
			<div className="w-11 h-6 bg-blueGray-400 rounded-full peer-focus:outline-none after:peer-focus:outline-none appearance-none outline-none peer peer-checked:after:translate-x-full select-none  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all duration-500 after:duration-500  peer-checked:bg-purple"></div>
		</label>
	);
}
ToggleBtn.propTypes = {
	title: PropTypes.string,
};
