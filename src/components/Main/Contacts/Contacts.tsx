import React from 'react';
import './Contacts.scss';

function Contacts() {
  return (
    <section
      className="section-narrow section-narrow_first-child"
      id="contacts"
    >
      <h2 className="subtitle">contacts</h2>
      <div className="decoration decoration_color_grey" />
      <ul className="contacts-list list">
        <li className="contacts-list__item list__item">
          <span className="list__icon list__icon_place" /> Samara, Russia
        </li>

        <li className="contacts-list__item list__item">
          <span className="list__icon list__icon_email" />
          <span className="list__text"> Email: </span>
          <a className="contacts-list__link" href="mailto:nilenderav@mail.ru">
            {' '}
            nilenderav@mail.ru
          </a>
        </li>

        <li className="contacts-list__item list__item">
          <span className="list__icon list__icon_github" />
          <span className="list__text"> GitHub: </span>

          <a
            className="contacts-list__link"
            href="https://github.com/Nilender-Andrey"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Nilender-Andrey
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
