import React from "react";
import "./about_styles.css"

// About

function About() {
    return (
        <section className="page-section-about bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <h2 className="text-center mt-0">About Us</h2>
                        <img src="./assets/logo_share-02.png" alt="logo" className="sharingBasketLogo"/>
                        <p className="text-muted mb-0">Sharing Basket has responded to the hunger crisis in America by providing food to people in need through a nationwide network of food banks.
                        In a country that wastes billions of pounds of food each year, it's almost shocking that anyone in America goes hungry. Yet every day, there are millions of children and adults who do not get the meals they need to thrive. 
                        We work to get nourishing food – from farmers, manufacturers, and retailers – to people in need. At the same time, we also seek to help the people we serve to build a path to a brighter, food-secure future.</p>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default About;