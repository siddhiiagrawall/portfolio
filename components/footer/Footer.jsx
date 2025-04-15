/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Siddhi Agrawal/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="mailto:a.siddhi0101@gmail.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-envelope"></i>
                </a>

                <a href="https://github.com/siddhiiagrawall" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://leetcode.com/u/agrawalriddhisiddhi8/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-code-alt"></i> {/* Alternative icon since LeetCode has no official one */}
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer;
