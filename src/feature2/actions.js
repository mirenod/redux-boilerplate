export const GET_BOOKS = 'GET_BOOKS';
export const RESET_BOOK = 'RESET_BOOK';

export function getBooks() {
  return async function (dispatch) {
    const res = await fetch('https://the-one-api.herokuapp.com/v1/book');
    const books = await res.json();
    
    return dispatch({
      type: 'GET_BOOKS',
      data: books.docs,
    });
  };
}


export function resetBooks() {
  return {
    type: 'RESET_BOOK',
  };
}
