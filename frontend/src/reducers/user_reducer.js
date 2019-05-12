import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/user_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const userReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.user,
        user: action.user
      };
    case LOGOUT_CURRENT_USER:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
};

export default userReducer;
