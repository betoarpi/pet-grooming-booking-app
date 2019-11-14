/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ProfileInfo = () => {
  return (
    <>
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
          <div className='profile__form-group profile__address'>
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
    </>
  );
};

export default ProfileInfo;
