import React from 'react';
import photo from '../../../assets/my-photo.jpg';

import './Pofile.scss';

function Profile() {
  return (
    <section className="section-profile">
      <div className="avatar">
        <div className="avatar__photo">
          <img className="avatar__img" src={photo} alt="Andrey Nilender" />
        </div>
      </div>

      <div className="profile">
        <h1 className="profile__title">Andrey Nilender</h1>
        <div className="decoration decoration_color_blue" />
        <h3 className="profile__profession">
          Junior JavaScript / React developer
        </h3>
      </div>
    </section>
  );
}

export default Profile;
