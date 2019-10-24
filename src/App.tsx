import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './containers/home/Home';
import { Layout } from './containers/layout/Layout';
import { store } from './store';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <section className="main-container">
          <Router>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/react-layout" />)} />    
              <Route path="/react-layout" exact component={Home} />
              <Route path="/react-layout/layout" component={Layout} />
            </Switch>
          </Router>
        </section>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
