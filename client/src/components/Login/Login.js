import React from "react";
import { Link } from 'react-router-dom'
import "./login-styles.css"

// Services

function Services() {
    return (
    <section className="page-section-services" id="login">
        <h2 className="text-center mt-0">Login to View Local Pantries!</h2>
        <div className="container">
          <div className="row">
    <div className="col-md-6">
      <div className="card card-4  loginCard">
        <h3>Community Login</h3>
          <p className="text-muted">Login to search for a pantry.</p>
           <Link to="/login-client">
          <button type="button" className="btn btn-primary loginBtn">Login </button>
        </Link>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card card-5 loginCard">
        <h3>Pantry Login</h3>
        <p className="text-muted">Add items to your wishlist for future customers.</p>
        <Link to="/login-pantry">
          <button disabled type="button" className="btn btn-primary loginBtn">Login </button>
        </Link>
      </div>
    </div>
    </div>   
    </div>
        
</section>
);
}

export default Services;