import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 

import Layout from './shared/Layout';


class App extends Component {

  render() {
    return (
      <Layout >
        {this.props.children}
      </Layout >
    );
  }
  
}

export default App;
