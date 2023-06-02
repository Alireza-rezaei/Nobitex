import colors from 'tailwindcss/colors';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			vazir: 'Vazirmatn Variable',
		},
		colors: {
			...colors,
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			dark: '#14151a',
			purple: '#784ed1',
			textColor: '#14151A',
			gray: '#f2f3f5',
		},
	},
	plugins: [],
};
