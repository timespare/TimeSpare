import { RECEIVE_ANOTHER_USER } from "../actions/user_actions";

const userDisplayedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANOTHER_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
export default userDisplayedReducer;
