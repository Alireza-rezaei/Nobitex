import { Container } from '@mui/system';
import './App.scss';
import CryptoCurrencyPriceTable from './Components/CryptoCurrencyPrice/CryptoCurrencyPriceTable';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Slider from './Components/Slider/Slider';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Landing />
				<CryptoCurrencyPriceTable />
				<Slider />
			</Container>
		</>
	);
}

export default App;
