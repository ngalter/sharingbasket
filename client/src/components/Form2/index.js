import React from "react";

import "./styles.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <form>
      <div className ="form-group formGroup2">
      <input className="form-control formControl2" {...props} />
    </div>
    </form>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group formGroup2">
      <textarea className="form-control2 formControl2" {...props} />
    </div>
  );
}

export function FormBtn2(props) {
  return (
    <button {...props} className="btn btn-success">
      {props.children}
    </button>
  );
}
