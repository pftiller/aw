import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'


import App from './components/templates/Home';
import configureStore from './components/store/configureStore';

const store = configureStore( window.__REDUX_STATE__ || {} );

const AppBundle = (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);

// window.onload = () => {
//     Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
//     });
// };
