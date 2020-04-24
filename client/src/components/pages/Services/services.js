import React from "react";
import "./services_styles.css"
// Projects

function Nav() {
    return (
    <header className="services-masthead">
      <section className="page-section-services bg-primary-portfolio" id="services">
            <h2 className="text-center mt-0 servicesTitle" style={{ color: 'white' }}>Services</h2>
            <div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="card card-1 servicesCard">
        <h3>Accessiblity</h3>
        <p className="text-muted">Search for the nearest food pantry in your area.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-2 servicesCard">
        <h3>Store</h3>
        <p className="text-muted">Store your list of items for a later time.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-3 servicesCard">
        <h3>Wishlist</h3>
        <p className="text-muted">See the list of what food pantries are asking for.</p>
      </div>
    </div>
  </div>
  </div>
          </section>
        </header>
        );
}

export default Nav;