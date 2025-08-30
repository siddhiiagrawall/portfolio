// eslint-disable-next-line no-unused-vars
import React from 'react';
import Programming from './Programming';
import Frontend from './Frontend';
import Tools from './Tools';
import DataML from './DataML';
import CoreConcepts from './CoreConcepts';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Programming />
        <Frontend />
        <Tools />
        <DataML />
        <CoreConcepts />
      </div>
    </section>
  )
}

export default Skills
