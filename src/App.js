import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Table from './components/Table'
import Form from './components/Form'
import { BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  state = {
   
  }

  render() {
    return (
      <BrowserRouter>
        <div className="chat-app">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/table' component={Table} />
          <Route path='/form' component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
