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
			gray500: '#e3e4e5',
			gray900: '#85888f',
		},
		screens: {
			xsm: { max: '375px' },
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
