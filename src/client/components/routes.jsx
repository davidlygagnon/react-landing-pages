import React from 'react';
import App from './app';
import About from './about';
import Terms from './terms';
import Help from './help';
import Home from './home';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

export default class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
        <Router history ={history}>
           <Route path="/" component={App}>
               <IndexRoute component={Home}/>
               <Route path="about" component={About}/>
               <Route path="terms" component={Terms}/>
               <Route path="help" component={Help}/>
           </Route>
        </Router>
    )
  }
}
