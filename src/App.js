import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Daily from './components/Daily'
import AddTicket from './components/AddTicket'
import { BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  state = {
    USday: this.USday(),
    regulartickets: 0,
    migrations: 0,
    tickets : [
      { id: 1, datecomplete: '12/3/2018', Localday: 3, month: this.Month(), week: this.Week(), start: '01:30', end: '02:30', theme: 'Julia', ticketnumber: '370156', website: 'google.com', remarks: 'Edit Page', status: 'Complete', skill: 'Migration' }
    ]
  }
  USday() {
    let today = new Date().getUTCDate()
    return(today);
  }
  Today() {
    var today = new Date().getDate()
    return(today);
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
    var days = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'],
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

  copyFunction () {
    let body = document.body, range, sel,
    table = document.getElementById('tableId');
      if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
          range.selectNodeContents(table);
          sel.addRange(range);
        } catch (e) {
          range.selectNode(table);
          sel.addRange(range);
        }
        document.execCommand("copy");

      } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(table);
        range.select();
        range.execCommand("Copy");
      }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="chat-app">
          <Navbar />
          <Route exact path='/' render={()=> <Home deleteTicket={this.deleteTicket} tickets={this.state.tickets}/>}/>
          <Route path='/daily-tracker' render={()=> <Daily USday={this.state.USday} deleteTicket={this.deleteTicket} tickets={this.state.tickets} copyFunction={this.copyFunction} regulartickets={this.state.regulartickets} migrations={this.state.migrations}/>} />
          <Route path='/add-ticket' render={()=> <AddTicket addTicket={this.addTicket}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
