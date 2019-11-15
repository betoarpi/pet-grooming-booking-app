import React from 'react';
import HistoryItem from '../components/HistoryItem';
import ProfileInfo from '../components/ProfileInfo';
import '../assets/styles/sass/views/_profile.scss';

const Profile = () => {

  function handleClick(e) {
    e.preventDefault();
    const target = e.target.id;
    const profileForm = document.getElementById('profile-form');
    const profileBtn = document.getElementById('profile-btn');
    const activeBookings = document.getElementById('active-bookings');
    const bookingsBtn = document.getElementById('bookings-btn');
    const bookingHistory = document.getElementById('booking-history');
    const historyBtn = document.getElementById('history-btn');
    const favourites = document.getElementById('favourites');
    const favouritesBtn = document.getElementById('favourites-btn');

    switch (target) {
      case 'bookings-btn':
        profileForm.classList.remove('active');
        profileBtn.classList.remove('active');
        bookingHistory.classList.remove('active');
        historyBtn.classList.remove('active');
        favourites.classList.remove('active');
        favouritesBtn.classList.remove('active');
        bookingsBtn.classList.add('active');
        activeBookings.classList.add('active');
        break;
      case 'history-btn':
        profileForm.classList.remove('active');
        profileBtn.classList.remove('active');
        activeBookings.classList.remove('active');
        bookingsBtn.classList.remove('active');
        favourites.classList.remove('active');
        favouritesBtn.classList.remove('active');
        bookingHistory.classList.add('active');
        historyBtn.classList.add('active');
        break;
      case 'favourites-btn':
        profileForm.classList.remove('active');
        profileBtn.classList.remove('active');
        activeBookings.classList.remove('active');
        bookingsBtn.classList.remove('active');
        bookingHistory.classList.remove('active');
        historyBtn.classList.remove('active');
        favourites.classList.add('active');
        favouritesBtn.classList.add('active');
        break;
      default:
        activeBookings.classList.remove('active');
        bookingsBtn.classList.remove('active');
        bookingHistory.classList.remove('active');
        historyBtn.classList.remove('active');
        favourites.classList.remove('active');
        favouritesBtn.classList.remove('active');
        profileForm.classList.add('active');
        profileBtn.classList.add('active');
        break;
    }
  }

  return (
    <section className='profile'>
      <section className='profile__sidebar'>
        <a href='/#' className='profile__sidebar-item active' id='profile-btn' onClick={(e) => handleClick(e)}>
          <i className='fas fa-user profile__sidebar-item-icon' />
          <span className='profile__sidebar-item-text'>Profile</span>
        </a>
        <a href='/#' className='profile__sidebar-item' id='bookings-btn' onClick={(e) => handleClick(e)}>
          <i className='fas fa-paw profile__sidebar-item-icon' />
          <span className='profile__sidebar-item-text'>Reservas activas</span>
        </a>
        <a href='/#' className='profile__sidebar-item' id='favourites-btn' onClick={(e) => handleClick(e)}>
          <i className='fas fa-heart profile__sidebar-item-icon' />
          <span className='profile__sidebar-item-text'>Mis favoritos</span>
        </a>
        <a href='/#' className='profile__sidebar-item' id='history-btn' onClick={(e) => handleClick(e)}>
          <i className='fas fa-history profile__sidebar-item-icon' />
          <span className='profile__sidebar-item-text'>Historal de reservas</span>
        </a>
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

        <div className='profile__favourites' id='favourites'>
          <h3>
            No tienes favoritos aún
            <span role='img' aria-label='sad face'>😢</span>
          </h3>
        </div>
      </section>
    </section>
  )
};

export default Profile;
