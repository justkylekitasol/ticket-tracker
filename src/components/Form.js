import React, { Component } from 'react'

class Form extends Component {
  state = {
    content: '',
    // datecomplete: this.Today(),
    // month: this.Month(),
    // week: this.Week(),
    // theme: null,
    // ticketnumber: null,
    // website: null,
    // remarks: null,
    // status: null,
    // skill : null
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
  
  handleChange = (e) => {
    this.setState({
      status: e.target.value,
      website: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTicket(this.state);
    this.setState({
      content: ''
    })
    console.log(this.state);
  }
  
  render(){
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row text-center">
            <div className="form-group col-sm-4">
              <label htmlFor="datecomplete">Date Completed</label>
              <input type="text" id="datecomplete" className="form-control" disabled value={this.Today()} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="month">Month</label>
              <input type="text" id="month" className="form-control" disabled value={this.Month()} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="week">Week</label>
              <input type="text" id="week" className="form-control" disabled value={this.Week()} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-4">
              <button type="button" className="btn btn-success">Start Time</button>
              <p>12:19 AM</p>
            </div>
            <div className="col-sm-4">
              <button type="button" className="btn btn-danger">End Time</button>
              <p>1:19 AM</p>
            </div>
            <div className="col-sm-4">
            <button type="button" className="btn btn-primary" disabled>Duration</button>
              <p>1:00:00</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="form-group col-sm-3">
              <label htmlFor="theme">Theme</label>
              <input type="text" id="theme" className="form-control" value={this.state.theme} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="ticketnumber">Ticket Number</label>
              <input type="text" id="ticketnumber" className="form-control" value={this.state.ticketnumber} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" className="form-control" value={this.state.website} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row text-center">
            <div className="form-group col-sm-3">
              <label htmlFor="status">Status</label>
              <select id="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="complete">Complete</option>
                <option value="returned">Returned</option>
              </select>
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="skill">Skill</label>
              <select id="skill" className="form-control" value={this.state.skill} onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="migration">Migration</option>
                <option value="regular ticket">Regular Ticket</option>
              </select>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="remarks">Remarks</label>
              <input type="text" id="remarks" className="form-control" value={this.state.remarks} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-right">
              <button type="submit" className="btn btn-lg btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form