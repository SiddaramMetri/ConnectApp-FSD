// const userInitialState = [];

import { DialerList } from "../data/calls";

const userInitialState = DialerList;

const usersListReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "USERS_LIST": {
      return [...state];
    }
    default: {
      return [...state];
    }
  }
};

export default usersListReducer;
