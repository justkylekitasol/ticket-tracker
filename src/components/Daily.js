import React from 'react'

const Daily = ({tickets, deleteTicket, USday, copyFunction, regulartickets, migrations}) => {
  
  const ticketList = tickets.length ? (
    tickets.map(ticket => {
      if (USday + 1 === ticket.Localday || USday === ticket.Localday){
        if (ticket.skill === "Regular Ticket"){
          regulartickets += 1;
          console.log(regulartickets)
        }
        if (ticket.skill === "Migration"){
          migrations += 1;
          console.log(regulartickets)
        }
        return (
          <tr className="ticket" key={ticket.id}>
            <td>{ ticket.datecomplete }</td>
            <td>{ ticket.month }</td>
            <td>{ ticket.week }</td>
            <td>{ ticket.start }</td>
            <td>{ ticket.end }</td>
            <td>{ ticket.theme }</td>
            <td>{ ticket.ticketnumber }</td>
            <td>{ ticket.website }</td>
            <td>{ ticket.status }</td>
            <td>{ ticket.skill }</td>
            <td>{ ticket.remarks }</td>
            <td><button className="btn btn-danger delete-btn" onClick={() => {deleteTicket(ticket.id)}}>Delete</button></td>
            <td><button className="btn btn-primary edit-btn">Edit</button></td>
          </tr>
        )
      } else {
        return null
      }
    })
  ) : (
    <div className="text-center">
      <h3>No Tickets for Today</h3>
    </div>
  )

  return(
    
    <div className="container mt-5">
      <h1 className="text-center">Daily Ticket Tracker</h1>
      <button className="btn btn-success copy-btn" onClick={() => {copyFunction()}}>Copy</button>
      <div id="tableId">
        <h6>For this day, I accomplished { regulartickets } Regular Tickets and { migrations } Migrations</h6>
        <div className="table-responsive">
          <table className="text-center table">
            <thead>
              <tr>
                <th>Date Completed</th>
                <th>Month</th>
                <th>Week</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Theme</th>
                <th>Ticket Number</th>
                <th>Website</th>
                <th>Status</th>
                <th>Skill</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              { ticketList }  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}

export default Daily