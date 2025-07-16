import { useState } from "react";
import axios from "axios";
function ApplyLeave() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const applyLeave = async () => {
    try {
      await axios.post("http://localhost:8080/api/leaves", {
        userId: user.id,
        fromDate,
        toDate,
        reason,
      });
      alert("Leave applied");
    } catch (err) {
      alert("Failed to apply leave");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h4 className="mb-3 text-center">Apply for Leave</h4>
        <input type="date" className="form-control mb-3" onChange={(e) => setFromDate(e.target.value)} />
        <input type="date" className="form-control mb-3" onChange={(e) => setToDate(e.target.value)} />
        <textarea className="form-control mb-3" placeholder="Reason for leave" onChange={(e) => setReason(e.target.value)}></textarea>
        <button className="btn btn-success w-100" onClick={applyLeave}>Submit</button>
      </div>
    </div>
  );
}
export default ApplyLeave;
