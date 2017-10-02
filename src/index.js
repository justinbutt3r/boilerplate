import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import './index.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div><App /></div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
