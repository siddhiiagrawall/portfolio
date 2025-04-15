/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I've worked on</span>

      <div className="exp__container container grid">

        {/* Graduate Engineer Trainee - Futuristic Bots */}
        <div className="exp__content">
          <div>
            <i className="uil uil-robot exp__icon"></i>
            <h3 className="exp__title">Graduate Engineer <br /> Trainee</h3>
          </div>

          <div>
            <span className="exp__comp">Futuristic Bots</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

          <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">Graduate Engineer Trainee <br /> Nov'24 – Present</h3>
              <p className="exp__modal-description">
                Working on real-time robotics systems and automation tools to optimize warehouse robotics and control systems.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Developed modular features in Python and C++ for Linux-based robotic environments.</p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Designed secure kiosk-mode screen lock system for warehouse deployment.</p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Optimized real-time control algorithms with live sensor integration (CAN bus).</p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Built a LiDAR + ML-based pallet detection system with 85% accuracy.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Developer Intern - STYX */}
        <div className="exp__content">
          <div>
            <i className="uil uil-brackets-curly exp__icon"></i>
            <h3 className="exp__title">Software <br /> Developer Intern</h3>
          </div>

          <div>
            <span className="exp__comp">STYX</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

          <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">Software Developer Intern <br /> Jul'24 – Aug'24</h3>
              <p className="exp__modal-description">
                Developed and maintained internal dashboard applications using React and Appwrite to track and manage policies.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Created a scalable React.js dashboard with component-level testing.</p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Integrated Appwrite backend and improved performance by 35%.</p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Resolved UI bugs and reduced inconsistencies by 20% through refactoring.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
