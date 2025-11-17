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

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">
                Software Engineer Intern – Full Stack <br /> Jul'25 – Present
              </h3>
              <p className="exp__modal-description">
                Working on ShareFile’s enterprise mobile platform focusing on React Native,
                backend API integrations, and workflow automation using AI-assisted tooling.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Connected 5+ backend APIs to mobile workflows, improving reliability for
                    5K+ active enterprise users.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Optimized React Native screens (lazy loading, pagination), reducing load time by 20%.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed reusable UI components and improved state management,
                    reducing feature build time by 25%.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Integrated Jira + Bitbucket + Copilot pipelines to automate workflows
                    and accelerate development cycles.
                  </p>
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

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">
                Software Development Intern – Backend <br /> Nov'24 – Apr'25
              </h3>
              <p className="exp__modal-description">
                Built scalable backend services and ML-powered automation for warehouse
                robotics and logistics intelligence systems.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed Django REST microservices handling 100+ requests/sec
                    with 99.8% uptime.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Implemented LiDAR pallet detection pipeline using HuggingFace + Python,
                    achieving 85% accuracy.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Optimized PostgreSQL models and queries, improving throughput by 40%.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Wrote unit & integration tests using Pytest, increasing backend
                    test coverage to 90%.
                  </p>
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

          <span className="exp__button" onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">
                Software Developer Intern <br /> Jul'24 – Aug'24
              </h3>
              <p className="exp__modal-description">
                Built internal dashboards in React.js with Appwrite backend for policy and
                control management.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed a scalable React.js dashboard with reusable components
                    and clean routing structure.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Integrated Appwrite backend for authentication, queries, and asset
                    management across components.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Refactored UI components, improving performance and consistency
                    across the dashboard by 20%.
                  </p>
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
