import React from 'react';
import './Skills.scss';
import js from '../../../assets/js.png';
import html5 from '../../../assets/HTML5.png';
import css from '../../../assets/CSS3.png';
import scss from '../../../assets/sass.png';
import github from '../../../assets/github.png';
import reactJS from '../../../assets/reactJS.png';
import redux from '../../../assets/redux.png';
import webpack from '../../../assets/webpack2.png';

const skills = [
  { src: js, alt: 'logo js' },
  { src: html5, alt: 'logo html5' },
  { src: css, alt: 'logo css' },
  { src: scss, alt: 'logo scss' },
  { src: github, alt: 'logo github' },
  { src: reactJS, alt: 'logo reactJS' },
  { src: redux, alt: 'logo redux' },
  { src: webpack, alt: 'logo webpack2' },
];

function Skills() {
  return (
    <section className="section-narrow" id="skills">
      <h2 className="subtitle">skills</h2>
      <div className="decoration decoration_color_grey" />
      <ul className="skills-list">
        {skills.map((item) => (
          <li className="skills-list__item" key={item.src}>
            <img className="skills-list__logo" src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
