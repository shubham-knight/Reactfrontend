import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../img/Ellipse 216.png";
import reactlogo from "../img/React-icon.png";
import arrows from "../img/Group 35601.png"

function Customer(){
    return (
          <Container fluid className="customer">
              <Row>
                  <Col md={6} className="customercol1">
                      <img src={profile} alt="profile"></img>
                  </Col>
                  <Col md={6} className="customercol2">
                      <a href="##"><p> SELECTED CUSTOMERS</p></a>
                      <h1>Check what our client say about us</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</p>
                      <div><img src={reactlogo} alt="rectlog"></img></div>
                      <div><img src={arrows} alt="arrows"></img></div>
                  </Col>
              </Row>
          </Container>
    );
};

export default Customer;