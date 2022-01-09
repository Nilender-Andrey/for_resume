import React from 'react';
import { Link } from 'react-router-dom';
import Efk from '../../../assets/2021-09-27_18-38-59.jpg';
import findACouple from '../../../assets/match_match_game.jpg';
import gallery from '../../../assets/2021-12-16_17-45-21.png';
import './Projects.scss';

const projects = [
  {
    to: 'https://rolling-scopes-school.github.io/nilender-andrey-JSFE2021Q1/english-for-kids-base/dist/',
    src: Efk,
    name: 'English for kids',
  },
  {
    to: 'https://rolling-scopes-school.github.io/nilender-andrey-JSFE2021Q1/match-match-game/dist/',
    src: findACouple,
    name: 'Find a couple',
  },
  {
    to: 'https://nilender-andrey.github.io/test_tasks/image_gallery/',
    src: gallery,
    name: 'Gallery',
  },
];

function Projects() {
  return (
    <section className="section-broad" id="projects">
      <h2 className="subtitle">projects</h2>
      <div className="decoration decoration_color_dark-grey" />
      <ul className="projects-list list">
        {projects.map((item) => (
          <li className="projects-list__item" key={item.name}>
            <a
              className="projects-list__link"
              href={item.to}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-list__jmg"
                src={item.src}
                alt={item.name}
              />
            </a>
            <p className="projects-list__name">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
