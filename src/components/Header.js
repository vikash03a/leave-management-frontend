import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <span className="navbar-brand">Leave Management</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {user && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/apply">Apply</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/myleaves">My Leaves</Link></li>

              {user?.role === "admin" && (
                <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
              )}
            </>
          )}

          {!user && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </>
          )}
        </ul>
        {user && (
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Header;