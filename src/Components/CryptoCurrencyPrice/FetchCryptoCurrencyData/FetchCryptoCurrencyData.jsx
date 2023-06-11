async function fetchCryptocurrencyData({ perPage, page }) {
	const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`;
	try {
		const response = await fetch(`${API_URL}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching cryptocurrency data:', error);
		throw error;
	}
}

export default fetchCryptocurrencyData;
