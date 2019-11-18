/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { profileUpdateRequest } from '../actions/index';
import gravatar from '../utils/gravatar';

const ProfileInfo = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const [fomrValues, setFormValues] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
    address: null,
    zipcode: null,
    phone: null,
  });

  const handleInput = (event) => {
    setFormValues({
      ...fomrValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.profileUpdateRequest(fomrValues);
    const profileForm = document.getElementById('profile-form');
    const successElement = document.createElement('h6');
    const successMessage = document.createTextNode('Se guardó con éxito');
    successElement.appendChild(successMessage);
    profileForm.appendChild(successElement);
  };

  const gravatarUrl = gravatar(user.email);

  return (
    <>
      <div className='profile__main-info'>
        <div className='profile__info'>
          {hasUser ?
            <img src={`${gravatarUrl}?s=120`} alt={user.email} /> :
            <i className='fas fa-user'> </i>}
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

      <form className='profile__form-container active' id='profile-form' onSubmit={handleSubmit}>
        <div className='profile__form-row'>
          <div className='profile__form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' value={user.username} onChange={handleInput} />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' value={user.email} onChange={handleInput} />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' value={user.phone} onChange={handleInput} />
          </div>
        </div>

        <div className='profile__form-row'>
          <div className='profile__form-group profile__address'>
            <label htmlFor='address'>Address</label>
            <input type='text' name='address' id='address' value={user.address} onChange={handleInput} />
          </div>
          <div className='profile__form-group'>
            <label htmlFor='zipcode'>Postal Code</label>
            <input type='text' name='zipcode' id='zipcode' value={user.zipcode} onChange={handleInput} />
          </div>
        </div>

        <div className='profile__form-row'>
          <button type='submit'>Update profile</button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  profileUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
