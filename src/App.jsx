import './App.scss';
import CryptoCurrencyPriceTable from './Components/CryptoCurrencyPrice/CryptoCurrencyPriceTable';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

function App() {
	return (
		<>
			<Header />
			<Landing />
			<CryptoCurrencyPriceTable />
		</>
	);
}

export default App;
