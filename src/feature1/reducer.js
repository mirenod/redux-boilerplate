import { GET_USERS, RESET_USERS } from './actions';

const initialState = {
  users: []
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: data
      };
    case RESET_USERS:
      return {
        ...state,
        users: []      
      };
    default:
      return state;
  }
}
