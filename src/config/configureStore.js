/* eslint-disable no-unused-vars */
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';

import rootReducer from '../reducers/reducers'
import initialState from '../data/initialState';


const configureStore = () => {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware);
  const composedEnhancers = compose(middleWareEnhancer);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  return store;
};

export default configureStore;
