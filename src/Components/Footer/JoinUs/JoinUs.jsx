import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function JoinUs({ isShow }) {
	return (
		<div className={`w-full ${isShow} `}>
			<h5 className='text-white'>با ما در دنیای رمز ارز ها همراه شو!</h5>
			<div className='w-10/12 flex items-center justify-between py-3'>
				<Link to='https://instagram.com/alreza.rz?igshid=ZDc4ODBmNjlmNQ==' className='text-3xl text-white'>
					<AiFillInstagram />
				</Link>
				<Link
					to='https://www.facebook.com/profile.php?id=100050301842479&mibextid=ZbWKwL'
					className='text-3xl text-white'
				>
					<AiFillFacebook />
				</Link>
				<Link to='https://www.linkedin.com/in/alireza-rezaei-47a67b1b0' className='text-3xl text-white'>
					<AiFillLinkedin />
				</Link>
				<Link to='https://twitter.com/alreza_rz?t=Nd-4ZLC1mIxE3RgfoBipcg&s=09' className='text-3xl text-white'>
					<AiFillTwitterCircle />
				</Link>
			</div>
		</div>
	);
}

JoinUs.propTypes = {
	isShow: PropTypes.string,
};
