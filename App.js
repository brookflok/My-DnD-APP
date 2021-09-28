import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigation from './navigation/HomeStackNavigation'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import spellReducer from './store/reducers/spellReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import spellSaga from './store/sagas/spellSagas'
import { Provider} from 'react-redux';

const rootReducer = combineReducers({
  spells: spellReducer
})

const sagaMiddleware = createSagaMiddleware()
const composedEnhancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools())

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(spellSaga)


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
