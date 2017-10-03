import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          <Route exact path="/" component={require('../Home/Home').default}/>
        </Switch>

      </div>
    );
  }
}

export default App;
