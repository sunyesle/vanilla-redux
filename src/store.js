import { createStore } from 'redux';

const LOCAL_STORAGE_KEY = 'Store';
const localStorageArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = localStorageArr ? localStorageArr : [], action) => {
  switch (action.type) {
    case ADD:
      const newState = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    case DELETE:
      const filterState = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filterState));
      return filterState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
