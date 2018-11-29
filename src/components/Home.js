import React from 'react'

const Home = () => {
  return (
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

        <tbody>
          <tr>
            <td>11/29/2018</td>
            <td>November</td>
            <td>5</td>
            <td>Yasmin</td>
            <td>371689</td>
            <td>https://my.onlinechiro.com/0031487/site/editor/cms</td>
            <td>10:10 PM</td>
            <td>11:00 PM</td>
            <td>Completed</td>
            <td>Migration</td>
            <td>For Review</td>
          </tr>
          <tr>
            <td>11/29/2018</td>
            <td>November</td>
            <td>5</td>
            <td>Yasmin</td>
            <td>371689</td>
            <td>https://my.onlinechiro.com/0031487/site/editor/cms</td>
            <td>10:10 PM</td>
            <td>11:00 PM</td>
            <td>Completed</td>
            <td>Migration</td>
            <td>For Review</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home