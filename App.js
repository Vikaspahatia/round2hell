import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenNavigator from './navigation/ScreenNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import stepsReducer from './store/reducers/steps';
import dateReducer from './store/reducers/changeDate';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
  steps: stepsReducer,
  date: dateReducer
});
 const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <ScreenNavigator />
    </Provider>
  );
} 