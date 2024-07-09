import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  const navLinkStyle = {
    backgroundColor: "#343a40", // Bootstrap's dark color
    color: "white",
    padding: "10px",
    textDecoration: "none",
    display: "block",
    borderRadius: "5px",
    margin: "5px 0",
    transition: "background-color 0.3s ease"
  };

  const navLinkHoverStyle = {
    backgroundColor: "#23272b" // Slightly lighter dark color on hover
  };
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
        <h1 className="bg-dark p-2 text-white text-center" style={{ borderRadius: "10px" }}>Dashboard</h1>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
