import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
          <Container fluid className="footer">
              <Row>
                  <Col md={5} className="footercol1">
                      <p>Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
                      <div className="d-flex justify-content-left">
                      <div className="footersocial"><i class="fa fa-facebook-f "></i></div>
                      <div className="footersocial"><i class="fa fa-twitter"></i></div>
                      <div className="footersocial"><i class="fa fa-instagram"></i></div>
                      </div> 
                  </Col>
                  <Col md={7} className="footercol2">
                  <Row>
                  <Col md={4}>
                      <h3>Our Services</h3>
                      <hr></hr>
                      <ul Style="list-style-type:none;">
                          <li>Web Development</li>
                          <li>Mobile Devlopment</li>
                          <li>Cloud Technologies</li>
                          <li>UI/UX Desgins</li>
                      </ul>
                  </Col>
                  <Col md={4}>
                      <h3>Our links</h3>
                      <hr></hr>
                      <ul Style="list-style-type:none;">
                          <li>Terms & Conditons</li>
                          <li>Privacy Policy</li>
                          <li>Imprint</li>
                          <li>Legal</li>
                      </ul>
                  </Col>
                  <Col md={4}>
                      <h3>Contact Us</h3>
                      <hr></hr>
                      <ul Style="list-style-type:none;">
                          <li>Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</li>
                          <li>00 9999999999</li>
                          <li>hello@inkyy.com</li>
                      </ul>
                  </Col>
                  </Row></Col>
              </Row>
          </Container>
    );
};

export default Footer;