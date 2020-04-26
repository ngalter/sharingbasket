import React from "react";
//import API from "../../utils/API-external";
import { Col, Row, Container } from "../../components/Grid/";
import { Input, FormBtn } from "../../components/Form/";

import "./styles.css"

function SearchBar() {
    return (
      <Container fluid>
        <Row>
          <div className="hero">
          </div>
          <Col size="md-12">
            <form className="d-flex">
              <Input
                // onChange={handleInputChange}
                name="title"
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                placeholder='Search your location'
              />
              <FormBtn
                className="formBtn"
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                //onClick={handleSearchSubmit}
              >
                <i className="fas fa-search"></i>
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
}

export default SearchBar;