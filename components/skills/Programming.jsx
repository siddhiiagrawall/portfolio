// eslint-disable-next-line no-unused-vars
import React from 'react'

const Programming = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend & Programming</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bxl-python'></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bxl-nodejs'></i>
            <div>
              <h3 className="skills__name">FastAPI / Django</h3>
              <span className="skills__level">Intermediate–Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bxl-nodejs'></i>
            <div>
              <h3 className="skills__name">Node.js & Express.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-server'></i>
            <div>
              <h3 className="skills__name">REST APIs / Microservices</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bxs-data'></i>
            <div>
              <h3 className="skills__name">PostgreSQL / MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-memory-card'></i>
            <div>
              <h3 className="skills__name">Redis (Caching / Queues)</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-c-plus-plus'></i>
            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Programming

