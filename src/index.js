import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import {
    ApolloProvider,
    ApolloClient,
    createNetworkInterface
} from 'react-apollo'
import { ConnectedRouter as Router } from 'react-router-redux'
import buildStore, { history } from './store'
import './index.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
    uri: process.env.REACT_APP_GRAPHQL_URI
})

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    connectToDevTools: process.env.NODE_ENV === 'development'
})

const store = buildStore(client);

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
        <Router history={history}>
            <App />
        </Router>
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
