export const userReducer = {
  addUser: (state, actions) => {
    return {
      ...state,
      token: actions.payload.id,
    };
  },

  signUpUser: (state, actions) => {
    return {
      ...state,
      user: { ...actions.payload.user },
      items: actions.payload.items,
    };
  },

  addItem: (state, actions) => {
    return { ...state, items: [actions.payload, ...state.items] };
  },

  removeItem: (state, actions) => {
    return state;
  },

  changeItem: (state, actions) => {
    return state;
  },

  toggleIsDone: (state, actions) => {
    return state;
  },

  toggleIsOnboarded: (state, actions) => {
    return { ...state, isOnboarded: actions.payload };
  },

  cleareStore: (state, actions) => {
    return {
      token: null,
      isOnboarded: false,
      loader: false,
      user: {},
      items: [],
    };
  },

  toggleLoader: (state, actions) => {
    return { ...state, loader: actions.payload };
  },
};
