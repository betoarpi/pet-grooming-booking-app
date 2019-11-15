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
    default:
      return state;
  }
};

export default reducer;
