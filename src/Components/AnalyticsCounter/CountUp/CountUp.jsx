import { useEffect, useRef } from 'react';

export default function NumberCounter(number) {
	const countRef = useRef(null);
	useEffect(() => {
		const target = number; // Set your desired target number
		const element = countRef.current;
		let count = 0;
		const formatNumber = (value, isCounting) => {
			const suffixes = ['', 'k', 'M', 'B', 'T'];
			let suffixIndex = 0;

			while (value >= 1000 && suffixIndex < suffixes.length - 1) {
				value /= 1000;
				suffixIndex++;
			}

			let formattedValue;
			if (isCounting && value < 1000) {
				formattedValue = value.toFixed(1);
			} else {
				formattedValue = Math.round(value);
			}

			return `<span class="px-2">${formattedValue}</span> <span class="text-indigo-400">${suffixes[suffixIndex]}</span> `;
		};

		const updateCount = () => {
			const increment = Math.ceil(target / 200); // Adjust the speed of the animation by changing the divisor
			if (count < target) {
				count += increment;
				element.innerHTML = formatNumber(count, true);
				requestAnimationFrame(updateCount); // Use requestAnimationFrame for smoother animation
			} else if (count === target) {
				element.innerHTML = formatNumber(count, false);
				requestAnimationFrame(updateCount); // Use requestAnimationFrame for smoother animation
			} else {
				element.innerHTML = formatNumber(target, false);
			}
		};

		const options = {
			threshold: 0.5, // Adjust the threshold value to control when the animation starts (0.5 means when at least 50% of the element is visible)
		};

		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				observer.unobserve(entry.target);
				updateCount();
			}
		}, options);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, []);

	return <span ref={countRef} className='flex flex-row-reverse'></span>;
}
