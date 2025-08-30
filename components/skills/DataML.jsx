// eslint-disable-next-line no-unused-vars
import React from 'react'

const DataML = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data & ML</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-brain'></i>
            <div>
              <h3 className="skills__name">Hugging Face</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-line-chart'></i>
            <div>
              <h3 className="skills__name">scikit-learn</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-table'></i>
            <div>
              <h3 className="skills__name">Pandas</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-math'></i>
            <div>
              <h3 className="skills__name">NumPy</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DataML
