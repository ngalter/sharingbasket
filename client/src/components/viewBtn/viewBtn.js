  
import React from "react";

function ViewBtn(props) {
  return (
    <a className="view-btn btn btn-secondary" href={props.link} target="_blank" tabIndex="0" {...props} style={{ float: "right", marginRight: 10, color: "#ffffff" }}> <i className="fas fa-eye"></i>
    </a>
  );
}

export default ViewBtn;