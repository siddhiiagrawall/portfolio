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

        {/* Software Engineer Intern - Progress (ShareFile) */}
        <div className="exp__content">
          <div>
            <i className="uil uil-cloud exp__icon"></i>
            <h3 className="exp__title">Software Engineer <br /> Intern – Full Stack</h3>
          </div>

          <div>
            <span className="exp__comp">Progress (ShareFile)</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

          <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">Software Engineer Intern – Full Stack <br /> Jul'25 – Present</h3>
              <p className="exp__modal-description">
                Contributing to ShareFile (enterprise content collaboration platform) with full-stack development in React Native and backend-for-frontend APIs.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Developed and maintained 15+ reusable React Native components, reducing UI build time by 25%.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Redesigned mobile design system in TypeScript, improving maintainability and increasing delivery speed by 20%.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Architected Backend-for-Frontend (BFF) APIs to optimize API calls, lowering latency by 15% for 500K+ users.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Resolved 20+ critical UI/functional bugs in Agile/Scrum, reducing production issues by 30%.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Development Intern - Futuristic Bots */}
        <div className="exp__content">
          <div>
            <i className="uil uil-robot exp__icon"></i>
            <h3 className="exp__title">Software Development <br /> Intern – Backend</h3>
          </div>

          <div>
            <span className="exp__comp">Futuristic Bots</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

          <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">Software Development Intern – Backend <br /> Nov'24 – Apr'25</h3>
              <p className="exp__modal-description">
                Built scalable backend services and ML-based automation for warehouse robotics systems.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Built Django backend services handling 100+ requests/sec with 99.8% uptime.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Implemented ML-based LiDAR pallet detection using Python + scikit-learn, achieving 85% accuracy in warehouse automation.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Optimized ROS-CAN bridge with multithreading, improving data throughput by 40%.</p>
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

          <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

          <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">Software Developer Intern <br /> Jul'24 – Aug'24</h3>
              <p className="exp__modal-description">
                Built internal dashboard applications in React.js with Appwrite backend to manage policies and controls.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Created a scalable React.js dashboard with component-level testing.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">Integrated Appwrite backend and improved performance by 35%.</p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
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
