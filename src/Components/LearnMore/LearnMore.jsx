import { Container } from '@mui/system';
import LearnMoreItem from './LearnMoreItem/LearnMoreItem';
import guideToBuying from './../../assets/LearnMoreImages/GuideToBuyingDigitalCurrency.png';
import educationalVideos from './../../assets/LearnMoreImages/EducationalVideos.png';
import nobitexMagazine from './../../assets/LearnMoreImages/NobitexMagazine.png';
import questions from './../../assets/LearnMoreImages/FrequentlyAskedQuestions.png';

export default function LearnMore() {
	return (
		<div className='relative bg-white top-10 md:-top-[5rem] lg:-top-[17rem] w-full p-2 pb-[8rem]'>
			<Container>
				<h2 className='text-center text-2xl md:text-3xl py-14 mt-3 '>همراه با نوبیتکس بیشتر یاد بگیرید</h2>
				<div className='flex items-center justify-between w-full flex-wrap'>
					<LearnMoreItem title={`راهنمای خرید ارز دیجیتال`} icon={guideToBuying} />
					<LearnMoreItem title={`ویدئوهای آموزشی`} icon={educationalVideos} />
					<LearnMoreItem title={`مجله نوبیتکس`} icon={nobitexMagazine} />
					<LearnMoreItem title={`سوالات متداول`} icon={questions} />
				</div>
			</Container>
		</div>
	);
}
