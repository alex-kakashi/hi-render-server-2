const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case USERS_LOADED:
    //   return Object.assign({}, state, { items: action.items });

    default:
      return state;
  }
}

