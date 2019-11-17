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
