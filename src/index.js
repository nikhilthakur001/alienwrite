import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './modules/home/home';
import Article from './modules/article/article';

const appRoute = (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/article/:id' component={Article} />
        </div>
    </Router>
)

ReactDOM.render(appRoute, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
