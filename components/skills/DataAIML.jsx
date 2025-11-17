// eslint-disable-next-line no-unused-vars
import React from 'react'

const DataML = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">AI, ML & Data</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-bot'></i>
            <div>
              <h3 className="skills__name">OpenAI APIs / GPT Workflows</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-brain'></i>
            <div>
              <h3 className="skills__name">HuggingFace Transformers</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-code-block'></i>
            <div>
              <h3 className="skills__name">LangChain (Basics)</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-table'></i>
            <div>
              <h3 className="skills__name">Pandas / NumPy</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DataML;
