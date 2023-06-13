import { Container } from '@mui/system';
import WhyNobitexItem from './WhyNobitexItem/WhyNobitexItem';
import simpleEnvironment from './../../assets/WhyNobitexImages/SimplEnvironment.webp';
import safeBuyingAndSelling from './../../assets/WhyNobitexImages/SafeBuyingAndSelling.png';
import leadingAndFast from './../../assets/WhyNobitexImages/LeadingAndFast.png';
export default function WhyNobitex() {
	return (
		<div className='relative bg-white top-10 md:-top-[5rem] lg:-top-[17rem] w-full p-2 '>
			<Container>
				<h2 className='text-center text-2xl md:text-3xl py-14 mt-3 '>چرا نوبیتکس را انتخاب کنیم؟</h2>
				<div className='relative flex justify-between items-center w-full flex-col md:flex-row'>
					<WhyNobitexItem
						imageSrc={simpleEnvironment}
						title={` ساده و کاربردی `}
						description={`محیط ساده و کاربردی نوبیتکس، معامله ارزدیجیتال را برای شما لذت بخش خواهد کرد.`}
					/>
					<WhyNobitexItem
						imageSrc={safeBuyingAndSelling}
						title={`خرید و فروش امن `}
						description={`اولویت نوبیتکس امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش کنید.`}
					/>
					<WhyNobitexItem
						imageSrc={leadingAndFast}
						title={`پیشرو و سریع `}
						description={`تنوع رمزارزها و سرعت معاملات، نوبیتکس را جزو بهترین بازارهای آنلاین قرار داده است.`}
					/>
				</div>
			</Container>
		</div>
	);
}
