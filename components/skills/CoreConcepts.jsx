// eslint-disable-next-line no-unused-vars
import React from 'react'

const CoreConcepts = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Core Concepts</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-cube'></i>
            <div>
              <h3 className="skills__name">OOP</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-network-chart'></i>
            <div>
              <h3 className="skills__name">System Design</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-repeat'></i>
            <div>
              <h3 className="skills__name">Event-Driven Architecture</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-layer-plus'></i>
            <div>
              <h3 className="skills__name">Caching (Redis)</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-check-double'></i>
            <div>
              <h3 className="skills__name">TDD</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoreConcepts;
