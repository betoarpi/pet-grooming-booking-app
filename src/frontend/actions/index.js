export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const removeFavorite = (payload) => ({
  type: 'REMOVE_FAVORITE',
  payload,
});

export const getCurrent = (payload) => ({
  type: 'GET_CURRENT',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const profileUpdateRequest = (payload) => ({
  type: 'PROFILE_UPDATE_REQUEST',
  payload,
});

export const selectedDate = (payload) => ({
  type: 'SELECTED_DATE',
  payload,
});

export const bookingTime = (payload) => ({
  type: 'BOOKING_TIME',
  payload,
});

export const bookingRequest = (payload) => ({
  type: 'BOOKING_REQUEST',
  payload,
});
