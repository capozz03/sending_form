import { createStore, combineReducers } from 'redux';
import questionsReducer from './questionReducer'

const reducer = combineReducers({
    questionsList: questionsReducer
  })


export const store = createStore(reducer);


window.store = store;