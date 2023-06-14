import { Container } from '@mui/system';
import './App.scss';
import CryptoCurrencyPriceTable from './Components/CryptoCurrencyPrice/CryptoCurrencyPriceTable';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Slider from './Components/Slider/Slider';
import WhyNobitex from './Components/WhyNobitex/WhyNobitex';
import Facilities from './Components/Facilities/Facilities';
import AnalyticsCounter from './Components/AnalyticsCounter/AnalyticsCounter';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Landing />
				<CryptoCurrencyPriceTable />
				<Slider />
			</Container>
			<WhyNobitex />
			<Container>
				<Facilities />
			</Container>
			<AnalyticsCounter />
		</>
	);
}

export default App;
