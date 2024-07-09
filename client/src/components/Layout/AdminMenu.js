import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
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
    <>
      <div className="text-center">
        <div className="list-group">
        <h1 className="bg-dark p-2 text-white text-center" style={{ borderRadius: "10px" }}>Admin Panel</h1>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
            style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = navLinkStyle.backgroundColor)}
          >
            Orders
          </NavLink>
    
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
