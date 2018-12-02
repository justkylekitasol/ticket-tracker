import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Table from './components/Table'
import Form from './components/Form'
import { BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  state = {
    tickets : [
      { id: 1, datecomplete: this.Today(), month: this.Month(), week: this.Week(), theme: 'Julia', ticketnumber: '370156', website: 'google.com', remarks: 'Edit Page', status: 'Complete', skill: 'Migration' }
    ]
  }

  Today() {
    let date = new Date().getDate(),
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear();

    return(date + '/' + month + '/' + year);
  }
  Week() {
    // const weekNumber = new Date().getDate();
    // const weekNumberofMonth = ['first', 'second', 'third', 'fourth', 'fifth'];
    // console.log(weekNumber);
    // console.log(weekNumberofMonth[Math.floor(31 / 7)]);
    // const today = new Date();
    // const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    // const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    // console.log(today, firstDayOfYear, pastDaysOfYear);
    // return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    var date = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday',
                'Thursday','Friday','Saturday'],
        prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
        
    return prefixes[Math.floor(date.getDate() / 7)] + ' ' + days[date.getDay()];
  }
  
  Month() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
    let month = new Date().getMonth();
    return(monthNames[month]);
  }

  addTicket = (ticket) => {
    ticket.id = Math.random();
    let tickets = [...this.state.tickets, ticket];
    this.setState({
      tickets
    })
  }

  deleteTicket = (id) => {
    let tickets = this.state.tickets.filter(ticket => {
      return ticket.id !== id
    });
    this.setState({
      tickets: tickets
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="chat-app">
          <Navbar />
          <Route exact path='/' render={()=> <Home deleteTicket={this.deleteTicket} tickets={this.state.tickets}/>}/>
          <Route path='/table' component={Table} />
          <Route path='/form' render={()=> <Form addTicket={this.addTicket}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
