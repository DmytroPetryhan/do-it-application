export const userReducer = {
  addUser: (state, actions) => {
    return {
      ...state,
      user: { ...actions.payload },
      token: actions.payload.id,
    };
  },
  addItem: (state, actions) => {
    return state;
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
};
