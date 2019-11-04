import React from 'react';
import HistoryItem from '../components/HistoryItem';
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
      <div className='profile__sidebar-item'>
        <i className='fas fa-bell profile__sidebar-item-icon' />
        <span className='profile__sidebar-item-text'>Notificaciones</span>
      </div>
    </section>

    <section className='profile__content'>
      <div className='profile__main-info'>
        <div className='profile__info'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
            alt='User avatar'
          />
          <div className='profile__user-data'>
            <h5 className='profile__user-data-name'>User Name</h5>
            <div className='profile__user-data-address'>Toluca, Mex</div>
          </div>
        </div>
        <div className='profile__statistics'>
          <div className='profile__statistic-item'>
            <span>0</span>
            <span>Services</span>
          </div>
          <div className='profile__statistic-item'>
            <span>0</span>
            <span>Reviews</span>
          </div>
          <div className='profile__statistic-item'>
            <span>0</span>
            <span>Favorites</span>
          </div>
        </div>
      </div>

      <div className='profile__form-container'>
        <div className='profile__form-row'>
          <div className='profile__form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' />
          </div>
        </div>

        <div className='profile__form-row'>
          <div className='profile__form-group profile__address-width'>
            <label htmlFor='address'>Address</label>
            <input type='text' name='address' id='address' />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='postal_code'>Postal Code</label>
            <input type='text' name='postal_code' id='postal_code' />
          </div>
        </div>

        <div className='profile__form-row'>
          <button type='submit'>Update profile</button>
        </div>
      </div>

      <h4>Reservas Activas</h4>

      <div className='profile__history'>
        <HistoryItem details={true}/>
      </div>

      <h4>Historial de reservas</h4>
      <div className='profile__history'>
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
