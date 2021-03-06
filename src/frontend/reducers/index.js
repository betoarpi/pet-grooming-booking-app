const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favs: state.favs.filter((items) => items.id !== action.payload.id),
      };
    case 'GET_CURRENT':
      return {
        ...state,
        currentSalon: state.salons.find((item) => item.id.toString() === action.payload) || [],
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'PROFILE_UPDATE_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SELECTED_DATE':
      return {
        ...state,
        currentSalon: {
          ...state.currentSalon,
          selectedDate: action.payload,
        },
      };
    case 'BOOKING_TIME':
      return {
        ...state,
        bookingTime: action.payload,
      };
    case 'BOOKING_REQUEST':
      return {
        ...state,
        bookingInformation: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
