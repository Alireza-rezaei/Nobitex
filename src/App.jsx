import { Container } from '@mui/system';
import './App.scss';
import CryptoCurrencyPriceTable from './Components/CryptoCurrencyPrice/CryptoCurrencyPriceTable';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Landing />
				<CryptoCurrencyPriceTable />
			</Container>
		</>
	);
}

export default App;
