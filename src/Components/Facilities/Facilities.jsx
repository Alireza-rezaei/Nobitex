import appScreenShot from './../../assets/Facilities/AppScreenShot.webp';
import FacilitiesItem from './FacilitiesItem/FacilitiesItem';
import walletManagement from './../../assets/Facilities/WalletManagement.png';
import payment from './../../assets/Facilities/Payment.png';
import competitiveFee from './../../assets/Facilities/CompetitiveFee.png';
import safeWallet from './../../assets/Facilities/SafeWallet.png';
export default function Facilities() {
	return (
		<div className='flex flex-col relative top-10 md:-top-[5rem] lg:-top-[17rem] w-full '>
			<div className='title w-full relative flex items-center justify-center py-14 mt-3'>
				<h2 className='text-dark text-xl lg:text-3xl text-center'>بهترین امکانات خرید و فروش ارزهای دیجیتال</h2>
			</div>
			<div className='flex flex-col items-center justify-center lg:flex-row  w-full relative p-2'>
				<div className='w-full lg:w-1/2 flex flex-col items-start justify-start px-0 md:px-5'>
					<FacilitiesItem
						icon={walletManagement}
						title={`مدیریت موجودی کیف پول `}
						description={`رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید `}
					/>
					<FacilitiesItem
						icon={payment}
						title={`پرداخت با کارت‌های شتاب `}
						description={`معامله انواع رمزارز با تومان از طریق واریز و برداشت با کارت‌های بانکی عضو شتاب `}
					/>
					<FacilitiesItem
						icon={safeWallet}
						title={`کیف پول امن`}
						description={`رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در برابر هک ایمن خواهد بود `}
					/>
					<FacilitiesItem
						icon={competitiveFee}
						title={` کارمزد رقابتی `}
						description={`کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن حجم معاملات کاهش می‌یابد `}
					/>
				</div>
				<div className='w-full md:w-1/2 h-auto flex items-center justify-center -order-10 lg:order-[0]'>
					<img src={appScreenShot} alt='Screen Shot Applications' />
				</div>
			</div>
		</div>
	);
}
