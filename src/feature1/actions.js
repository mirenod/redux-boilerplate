export const GET_USERS = 'GET_USERS';
export const RESET_USERS = 'RESET_USERS';

export function getUsers() {
  return async function (dispatch) {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return dispatch({
      type: 'GET_USERS',
      data: users,
    });
  };
}


export function resetUsers() {
  return {
    type: 'RESET_USERS',
  };
}
