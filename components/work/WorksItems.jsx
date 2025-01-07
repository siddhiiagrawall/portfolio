/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const WorksItems = ({ item }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleDemoClick = (e) => {
		e.preventDefault();
		if (item.status === 'development') {
			setShowTooltip(true);
		} else if (item.demoUrl && item.demoUrl !== '#') {
			window.open(item.demoUrl, '_blank');
		}
	};

	return (
		<div className='work__card' key={item.id}>
			<img src={item.image} alt='' className='work__img' />
			<h3 className='work__title'>{item.title}</h3>
			<div className='work__button-container'>
				<a
					href='#'
					className='work__button'
					onClick={handleDemoClick}
					onMouseEnter={() =>
						item.status === 'development' && setShowTooltip(true)
					}
					onMouseLeave={() => setShowTooltip(false)}
				>
					Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
				</a>
				{showTooltip && item.status === 'development' && (
					<div className='work__tooltip'>Under Development</div>
				)}
			</div>
		</div>
	);
};

export default WorksItems;
