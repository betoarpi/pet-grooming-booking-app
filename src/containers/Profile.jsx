import React from 'react';
import HistoryItem from '../components/HistoryItem';
import ProfileInfo from '../components/ProfileInfo';
import '../assets/styles/sass/views/_profile.scss';

const Profile = () => (
  <section className='profile'>
    <section className='profile__sidebar'>
      <div className='profile__sidebar-item--active'>
        <i className='fas fa-user profile__sidebar-item-icon' />
        <span className='profile__sidebar-item-text'>Profile</span>
      </div>
      <div className='profile__sidebar-item'>
        <i className='fas fa-paw profile__sidebar-item-icon' />
        <span className='profile__sidebar-item-text'>Reservas activas</span>
      </div>
      <div className='profile__sidebar-item'>
        <i className='fas fa-heart profile__sidebar-item-icon' />
        <span className='profile__sidebar-item-text'>Mis favoritos</span>
      </div>
      <div className='profile__sidebar-item'>
        <i className='fas fa-history profile__sidebar-item-icon' />
        <span className='profile__sidebar-item-text'>Historal de reservas</span>
      </div>
    </section>

    <section className='profile__content'>
      <ProfileInfo />

      <div className='profile__history' id='active-bookings'>
        <h4>Reservas Activas</h4>
        <HistoryItem details={true} />
      </div>

      <div className='profile__history' id='booking-history'>
        <h4>Historial de reservas</h4>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </div>
    </section>
  </section>
);

export default Profile;
