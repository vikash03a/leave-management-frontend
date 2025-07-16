import { useEffect, useState } from "react";
import axios from "axios";

function LeaveList() {
 const [leaves, setLeaves] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user && user.id) {
      axios.get(`http://localhost:8080/api/leaves/user/${user.id}`)
        .then(res => setLeaves(res.data))
        .catch(err => alert("Failed to fetch leaves"));
    }
  }, [user]);

  if (!user || !user.id) {
    return <div className="container mt-5"><h4>Please login to view your leave records.</h4></div>;
  }

  return (
    <div className="container mt-5">
      <h4 className="mb-4">My Leave Applications</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;
