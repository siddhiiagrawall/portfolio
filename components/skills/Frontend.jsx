// eslint-disable-next-line no-unused-vars
import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
          <h3 className="skills__title">Programming & ML</h3>
    
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
                <i className='bx bxl-c-plus-plus'></i>
                <div>
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
    
              <div className="skills__data">
                <i className='bx bx-code-alt'></i>
                <div>
                  <h3 className="skills__name">Data Structures & Algorithms</h3>
                  <span className="skills__level">Proficient (800+ Problems)</span>
                </div>
              </div>
    
              <div className="skills__data">
                <i className='bx bx-brain'></i>
                <div>
                  <h3 className="skills__name">Machine Learning</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Frontend