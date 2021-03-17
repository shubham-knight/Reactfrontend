import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import uiux from "../img/Group 35621.png"
function Service(){
    return (
      <Container fluid>
          <Row>
            <Col md={6} className="servicecol1">
            <div>
            <a href="url"><p>OUR SERVICES</p></a>
            <h3 Style={"padding-right: 150px"}>Transforming your ideas into Reality</h3>
            <div Style={"padding-right: 50px"}>
            <input type="button" class="btn btn-light serbtn" value="Web Development"/>
            <input type="button" class="btn btn-light serbtn" value="Mobile Development"/>
            <input type="button" class="btn btn-light serbtn" value="UI/UX Designing"/>
            <input type="button" class="btn btn-light serbtn" value="Branding"/>
            <input type="button" class="btn btn-light serbtn" value="Cloud Technology"/>
            </div>
            </div>
            </Col>
            <Col md={6} className="servicecol2">
            <div Style={"padding: 100px 80px"}>
            <Card style={{ width: 'auto', height: '25rem' }}>
                <Card.Body>
                  <Card.Title><img src={uiux} alt="uiux"></img>    UI/UX Designing</Card.Title>
                 <br></br>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                  </Card.Text>
                  <ul>
                      <li>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</li>
                      <li>Lorem ipsum dolor sit amet,</li>
                      <li>conse ctetur adipi scing elit.</li>
                      <li>Lorem ipsum dolor sit amet, conse ctetur</li>
                  </ul>
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
      </Container>
    );
};

export default Service;