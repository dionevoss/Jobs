import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './reducer/userReducer'

import './App.css'

const store = createStore(userReducer, {
    user: [{name: 'Dione Voss', email: 'dionevoss@gmail.com'}]
},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window
            .__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));