import React from 'react';
import './Languages.scss';

function Languages() {
  return (
    <section
      className="section-narrow section-narrow_last-child"
      id="languages"
    >
      <h2 className="subtitle">languages</h2>
      <div className="decoration decoration_color_grey" />
      <ul className="languages-list list">
        <li className="languages-list__item list__item">
          <span className="list__icon list__icon_eng" />
          <span className="list__text"> English</span> - Pre-Intermediate
        </li>
        <li className="languages-list__item list__item">
          <span className="list__icon list__icon_ru" />
          <span className="list__text"> Russian</span> - Native
        </li>
      </ul>
    </section>
  );
}

export default Languages;
