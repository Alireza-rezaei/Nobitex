import SmallPicture from '../../../assets/LandingImages/SmallPicture.webp';
import MediumPicture from '../../../assets/LandingImages/MediumPicture.webp';
import LargePicture from '../../../assets/LandingImages/LargePicture.svg';

export default function LandingPicture() {
	return (
		<picture className='relative scale-100 lg:scale-[1.5] xsm:mt-10 lg:-top-10 mt-0 top-0 z-10 left-0 right-0 w-full'>
			<source srcSet={SmallPicture} type='image/webp' media='(max-width:767px)' />
			<source srcSet={MediumPicture} type='image/webp' media='(max-width:1199px)' />
			<img className='h-full' src={LargePicture} alt='خرید و فروش ارزهای دیجیتال از صرافی نوبیتکس' />
		</picture>
	);
}
