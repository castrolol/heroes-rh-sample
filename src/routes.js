import React from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

import Error404 from './areas/errors/pages/Error404';
import ErrorPage from './areas/errors/pages/ErrorPage';
import IndexPage from './areas/home/pages/Index';

import App from './App';

export default (
    <Router history={browserHistory} >
    
        <Route path="/" component={App} >
            <IndexRoute component={IndexPage} />
            <Route path="home" component={IndexPage} />



        </Route>


        <Route path="/error" component={ErrorPage} >
            <Route path="404" component={Error404} />
        </Route>

        <Redirect from="*" to="/error/404" />
    </Router>
)