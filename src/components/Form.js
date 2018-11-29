import React, { Component } from 'react'

class Form extends Component {
  state = {
    content: ''
  }
  
  render(){
    return (
      <div className="container mt-5">
        <form>
          <div className="row text-center">
            <div className="form-group col-sm-4">
              <label htmlFor="date-complete">Date Completed</label>
              <input type="text" id="date-complete" className="form-control" disabled value="11/29/2018"/>
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="month">Month</label>
              <input type="text" id="month" className="form-control" disabled value="November"/>
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="week">Week</label>
              <input type="text" id="week" className="form-control" disabled value="Week 5"/>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm-4">
              <button type="button" class="btn btn-success">Start Time</button>
              <p>12:19 AM</p>
            </div>
            <div className="col-sm-4">
              <button type="button" class="btn btn-danger">End Time</button>
              <p>1:19 AM</p>
            </div>
            <div className="col-sm-4">
            <button type="button" class="btn btn-primary" disabled>Duration</button>
              <p>1:00:00</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="form-group col-sm-3">
              <label htmlFor="theme">Theme</label>
              <input type="text" id="theme" className="form-control"/>
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="ticket-number">Ticket Number</label>
              <input type="text" id="ticket-number" className="form-control"/>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="Website">Website</label>
              <input type="text" id="Website" className="form-control"/>
            </div>
          </div>
          <div className="row text-center">
            <div className="form-group col-sm-3">
              <label htmlFor="status">Status</label>
              <select id="status" className="form-control">
                <option value="complete">Complete</option>
                <option value="returned">Returned</option>
              </select>
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="skill">Skill</label>
              <select id="skill" className="form-control">
                <option value="migration">Migration</option>
                <option value="regular ticket">Regular Ticket</option>
              </select>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="remarks">Remarks</label>
              <input type="text" id="remarks" className="form-control"/>
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