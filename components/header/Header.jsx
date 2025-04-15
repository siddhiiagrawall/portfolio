// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    showMenu(false); // hide mobile menu after clicking nav item
  };

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>
          &lt;Siddhi Agrawal/&gt;
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => handleNavClick('#home')}
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => handleNavClick('#about')}
                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#skills'
                onClick={() => handleNavClick('#skills')}
                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#experience'
                onClick={() => handleNavClick('#experience')}
                className={activeNav === '#experience' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-bag-alt nav__icon'></i> Experience
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#projects'
                onClick={() => handleNavClick('#projects')}
                className={activeNav === '#projects' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-scenery nav__icon'></i> Projects
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#contact'
                onClick={() => handleNavClick('#contact')}
                className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-message nav__icon'></i> Contact Me
              </a>
            </li>

            <li className='nav__item theme-toggle-desktop'>
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {!Toggle && (
          <div className='theme-toggle-mobile'>
            <ThemeToggle />
          </div>
        )}

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
