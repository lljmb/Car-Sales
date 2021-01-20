import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// create redux store
import { createStore } from 'redux';
// connect store to App
import { Provider } from 'react-redux';
// import CarReducer
import { carReducer } from './reducers/carReducer'

import 'bulma/css/bulma.css';
import './styles.scss';


// create the store
const store = createStore(
    carReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

const rootElement = document.getElementById('root');
ReactDOM.render(
    // wrap App in Provider component & pass in the store as props
    <Provider store={store}>
    <App />
    </Provider>
    , rootElement);
