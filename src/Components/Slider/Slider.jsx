// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sellPosition from './../../assets/Sliderimages/SellPosition.jpg';
import trustWallet from './../../assets/Sliderimages/TrustWallet.jpg';
import staking from './../../assets/Sliderimages/Staking.jpg';
import waysPrevention from './../../assets/Sliderimages/WaysPrevention.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				breakpoints={{
					768: {
						slidesPerView: 3,
					},
				}}
				spaceBetween={50}
				pagination={{
					type: 'bullets',
					clickable: true,
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-active',
				}}
				navigation={true}
				loop={true}
				autoplay={{ delay: 3000 }}
				modules={[Pagination, Navigation, Autoplay]}
				className='mySwiper relative top-10 md:-top-[5rem] lg:-top-[20rem] w-full z-20'
				draggable={false}
			>
				<SwiperSlide>
					<div className='block'>
						<Link to='/sell'>
							<img src={sellPosition} className='rounded-3xl' alt='' />
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='block'>
						<Link to='/sell'>
							<img src={trustWallet} className='rounded-3xl' alt='' />
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='block'>
						<Link to='/sell'>
							<img src={staking} className='rounded-3xl' alt='' />
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='block'>
						<Link to='/sell'>
							<img src={waysPrevention} className='rounded-3xl' alt='' />
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
