import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

const AccordionMenu = ({ title, items, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='w-full md:w-3/12 relative'>
			<button
				className='pr-2 pt-2 text-white font-semibold w-full flex justify-between items-center'
				onClick={toggleAccordion}
			>
				<span className='text-base font-medium md:text-xl'>{title}</span>
				<RiArrowDropDownLine
					className={`text-2xl inline-block transition-all ${isOpen ? 'rotate-180' : 'rotate-0'} md:hidden`}
				/>
			</button>
			<div className={` ${isOpen ? 'block' : 'hidden'} md:block transition-all `}>
				<ul className='px-2'>
					{items.items.map((item, index) => {
						return (
							<li key={index} className='text-slate-400 text-xs md:text-[0.9rem] py-2'>
								<Link to={items.link[index]}>{item}</Link>
							</li>
						);
					})}
					{children}
				</ul>
			</div>
		</div>
	);
};

export default AccordionMenu;
