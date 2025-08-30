// eslint-disable-next-line no-unused-vars
import React from 'react'

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools & Platforms</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bxl-git'></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bxl-linux'></i>
            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-test-tube'></i>
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-git-compare'></i>
            <div>
              <h3 className="skills__name">CI/CD</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-task'></i>
            <div>
              <h3 className="skills__name">Jira</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tools
