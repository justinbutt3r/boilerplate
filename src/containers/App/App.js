import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './App.scss';

@withRouter 
export default class App extends Component {

  componentDidMount(){
    let history = window.history;
    if ('scrollRestoration' in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = 'manual';
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/two">two</Link>
        </p>

        <p>
          Lorem laboris proident esse minim et mollit qui.
Nulla minim aute elit tempor officia dolore commodo id et mollit proident. Aute ipsum duis ut incididunt. Ut deserunt sunt aute enim et deserunt. Ad et esse ex tempor tempor mollit duis deserunt minim esse in velit. Elit pariatur laboris sunt ad mollit magna.
        </p>
        <p>
          Lorem laboris proident esse minim et mollit qui.
Nulla minim aute elit tempor officia dolore commodo id et mollit proident. Aute ipsum duis ut incididunt. Ut deserunt sunt aute enim et deserunt. Ad et esse ex tempor tempor mollit duis deserunt minim esse in velit. Elit pariatur laboris sunt ad mollit magna.
        </p>

        <p>
          Lorem laboris proident esse minim et mollit qui.
Nulla minim aute elit tempor officia dolore commodo id et mollit proident. Aute ipsum duis ut incididunt. Ut deserunt sunt aute enim et deserunt. Ad et esse ex tempor tempor mollit duis deserunt minim esse in velit. Elit pariatur laboris sunt ad mollit magna.
        </p>

        <Switch>
          <Route exact path="/" component={require('../Home/Home').default}/>
          <Route exact path="/two" component={require('../Home/Home').default}/>
        </Switch>

      </div>
    );
  }
}