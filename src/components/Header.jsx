import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <h1>Poorest Air Quality Right Now</h1>
      <div className="update-info">
        <span>Showing</span>
        <span>{Date}</span>
        <span>Refresh in </span>
      </div>
    </div>
  );
}

export default Header;