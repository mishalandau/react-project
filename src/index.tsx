import AppStorage from '@/reducers';
import Basket from '@modules/basket';
import PageNotFound from '@modules/pageNotFound';
import Products from '@modules/products';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(AppStorage, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/basket" component={Basket} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();