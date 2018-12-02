import React from 'react'

const Home = ({tickets, deleteTicket}) => {
  const ticketList = tickets.length ? (
    tickets.map(ticket => {
      return (
        <tbody>
          <tr className="ticket" key={ticket.id}>
            <td>{ ticket.datecomplete }</td>
            <td>{ ticket.month }</td>
            <td>{ ticket.week }</td>
            <td>{ ticket.theme }</td>
            <td>{ ticket.ticketnumber }</td>
            <td>{ ticket.website }</td>
            <td>10:43 PM</td>
            <td>11:43 PM</td>
            <td>{ ticket.status }</td>
            <td>{ ticket.skill }</td>
            <td>{ ticket.remarks }</td>
            <td><button className="btn btn-danger" onClick={() => {deleteTicket(ticket.id)}}>Delete</button></td>
          </tr>
        </tbody>
      )
    })
  ) : (
    <div className="text-center">
      <h3>No Tickets</h3>
    </div>
  )
  
  return(
    <div className="ticket-list">
      <div className="text-center container mt-5">
        <h1>Ticket Tracker</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date Completed</th>
                <th>Month</th>
                <th>Week</th>
                <th>Theme</th>
                <th>Ticket Number</th>
                <th>Website</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Skill</th>
                <th>Remarks</th>
              </tr>
            </thead>
  
            { ticketList }  
          </table>
        </div>
      </div>
    </div>
  )
  
}

export default Home