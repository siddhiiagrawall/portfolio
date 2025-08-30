// eslint-disable-next-line no-unused-vars
import React from 'react';

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bx-award about__icon'></i>

				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>Software Engineer Intern at Progress <br /> Ex-Intern at Futuristic Bots</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-briefcase-alt about__icon'></i>

				<h3 className='about__title'>Projects</h3>
				<span className='about__subtitle'>10+ Academic & Personal Projects</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-graduation about__icon'></i>

				<h3 className='about__title'>Education</h3>
				<span className='about__subtitle'>B.Tech, Computer Science (Pre-final Year)</span>
			</div>
		</div>
	);
};

export default Info;
