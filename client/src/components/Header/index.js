import React from "react";
import "./../Header/style.css"

function Header({ children }) {
  return (
    <div
      style={{ textAlign: "center", height:300 }}
      className="header"
    >
      {children}
    </div>
  );
}

export default Header;
