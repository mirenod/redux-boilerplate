import { GET_BOOKS, RESET_BOOK } from './actions';

const initialState = {
  books: []
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        books: data
      };
    case RESET_BOOK:
      return {
        ...state,
        books: []      
      };
    default:
      return state;
  }
}
