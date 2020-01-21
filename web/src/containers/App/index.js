// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/session';
import './index.css';
import Routes from '../../Routes.js';

type Props = {
  authenticate: () => void,
}

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    }
  }

  props: Props

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default connect(
  null,
  { authenticate }
)(App);
