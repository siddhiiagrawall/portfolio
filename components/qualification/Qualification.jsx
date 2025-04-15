// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import './qualification.css';

const Qualification = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            {/* B.Tech */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Bachelor of Technology (CSE)</h3>
                <span className="qualification__subtitle">G.L. Bajaj Institute of Technology and Management, Greater Noida</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2021 – Aug 2025
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
            </motion.div>

            {/* Class 12 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div></div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
                <motion.span
                  className="qualification__line"
                  variants={lineVariants}
                />
              </div>
              <div>
                <h3 className="qualification__title">Class 12th (PCM)</h3>
                <span className="qualification__subtitle">Radiant Stars English School, Aligarh</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June 2021
                </div>
              </div>
            </motion.div>

            {/* Class 10 */}
            <motion.div className="qualification__data" variants={dataVariants}>
              <div>
                <h3 className="qualification__title">Class 10th</h3>
                <span className="qualification__subtitle">Radiant Stars English School, Aligarh</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> June 2019
                </div>
              </div>

              <div>
                <motion.span
                  className="qualification__round"
                  initial={{ scale: 0 }}
                  variants={{ visible: { scale: 1 } }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
