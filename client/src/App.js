import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import Students from './components/Students';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <AppNavbar/>
          <h1 className="App-title" >Add a new student!</h1>
        </header>
        <Students/>
      </div>
      </Provider>
    );
  }
}

export default App;
