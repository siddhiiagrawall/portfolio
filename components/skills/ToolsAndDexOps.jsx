// eslint-disable-next-line no-unused-vars
import React from 'react'

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps & Tools</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bxl-docker'></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-git-branch'></i>
            <div>
              <h3 className="skills__name">Git / GitHub / Bitbucket</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-terminal'></i>
            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-cog'></i>
            <div>
              <h3 className="skills__name">Jenkins CI/CD</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tools;