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
    const filteredList = state.items.filter(
      (item) => item.id != actions.payload
    );
    return { ...state, items: filteredList };
  },

  changeItem: (state, actions) => {
    state.items.forEach((item) => {
      if (item.id === actions.payload.id) {
        item.description = actions.payload.descriptionText;
      }
    });
    return state;
  },

  toggleIsDone: (state, actions) => {
    state.items.forEach((item) => {
      if (item.id === actions.payload) {
        item.completed = !item.completed;
      }
    });
  },

  toggleIsOnboarded: (state, actions) => {
    return { ...state, isOnboarded: actions.payload };
  },

  cleareStore: () => {
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
