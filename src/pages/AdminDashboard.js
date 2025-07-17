import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [leaves, setLeaves] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:8080/api/leaves")
      .then(res => setLeaves(res.data))
      .catch(() => alert("Failed to fetch leaves"));
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:8080/api/leaves/${id}/status`, { status });
      setLeaves(prev =>
        prev.map(l => (l.id === id ? { ...l, status } : l))
      );
    } catch {
      alert("Failed to update status");
    }
  };

  if (!user || user.role !== "admin") {
    return <div className="container mt-5">Access Denied</div>;
  }

  return (
    <div className="container mt-5">
      <h4>Admin Dashboard - Leave Requests</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.user?.name || "N/A"}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
              <td>
                {leave.status === "PENDING" && (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleStatusChange(leave.id, "APPROVED")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleStatusChange(leave.id, "REJECTED")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
