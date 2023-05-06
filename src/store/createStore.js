import { createStore, combineReducers } from "redux";
import usersListReducer from "../reducers/usersListReducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      sidebar: 0,
      usersList: usersListReducer,
    })
  );
  return store;
};

export default configStore;
