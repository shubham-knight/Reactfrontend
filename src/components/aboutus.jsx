import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import info from "../img/Group 35699.png"
import dots from "../img/Group 35650.png"
import triangle from "../img/Group 35698.png"
function Aboutus(){
    return(
          <Container fluid className="aboutus">
              <Row>
              <Col md={6} Style={"padding-left: 0px;"}>
              <img src={info} alt="info" />
              </Col>
              <Col md={6} className="aboutuscol2">
              <Row>
                  <Col md={12} Style={"padding-right: 0px;"}>
                  <img src={triangle} alt="info" width="350" height="350" style={{float: "right"}} /> 
                  </Col>
                  <Col md={12} Style={"padding-right: 0px;"}>
                    <a href="url"><p>ABOUT US</p></a>
                    <h3>Great Digital Agency</h3>
                    <br />
                    <h6>Our products are fully custom-made, built with the latest technologies and cloud-architectures.</h6>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</p>
                    <div className="float-left"><input type="button" class="btn btn-outline-primary homebtn" value="Get Started >>"/></div>
                    <img src={dots} alt="info" width="260" height="440" style={{float: "right"}} />
                  </Col>
              </Row>

              </Col>
              </Row>
          </Container>
    );
};

export default Aboutus;

// width="200" height="200"