import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    ApolloProvider,
    ApolloClient,
    createNetworkInterface
} from 'react-apollo'
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





ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
