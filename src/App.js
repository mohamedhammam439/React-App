import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Nav from './components/NAV/Nav';
import Home from './components/HOME/Home';
import CRUD from './components/CRUD/CRUD';
import TODOLIST from './components/TODOLIST/TODOLIST';
import Weather from './components/WEATHER/Weather';

class  App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Nav />
            <Route path="/HOME" component={Home} />
            <Route path="/CRUD" component={CRUD} />
            <Route path="/TODOLIST" component={TODOLIST} />
            <Route path="/Weather" component={Weather} />
        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
