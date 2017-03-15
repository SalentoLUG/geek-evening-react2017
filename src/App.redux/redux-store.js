import { combineReducers, createStore } from 'redux';
import ReduxDevTools from './redux-devtools';
import { devToolsEnhancer } from 'redux-devtools-extension';

const addTodo = (msg) => ({
  type: 'ADD_TODO', msg,
});

export const actions = {addTodo};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state = [...state, action.msg];
      break;
    default:
  }
  return state;
};

export const reducers = combineReducers({todos});

//const enhancer = devToolsEnhancer();
const enhancer = ReduxDevTools.instrument();

export const store = createStore(reducers, undefined, enhancer);

export default {actions, store};
