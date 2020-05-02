import React from "react";
import "./involved-styles.css"
// Contact

function Contact() {
    return (
        <section className="page-section-contact" id="getInvolved">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="mt-0">Get Involved</h2>
                    <p className="text-muted mb-5">Sharing Basket is grateful for the support we have received from passionate volunteers as we continue to mobilize resources to help those in need across the country. </p>
                    </div>
                </div>
                <div className="row">           
            <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
                <img src="../../assets/icon-8-01.png" alt="icons" className="involvedIcons" href=""/>
                <p>Volunteer</p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                <img src="../../assets/icon-6-01.png" alt="icons" className="involvedIcons" />
                <p>Donate</p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
            <img src="../../assets/icon-7-01.png" alt="icons" className="involvedIcons" />
                <p>Fundraise</p>
            </div>
        </div>
    </div>
</section>

);
}

export default Contact;