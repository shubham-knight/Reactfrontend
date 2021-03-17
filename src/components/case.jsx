import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bus from "../img/bus.png";
import layer from "../img/Layer 4dsasdas.png";
import asdasd from "../img/asdasd.png";

 
function Case(){
    return (
           <Container fluid className="casestudy">
               <Row>
                   <Col md={12} className="casestdycol1">
                       <h1>Case Studies</h1>
                       <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                   </Col>
                   <Col md={4}>
                   <div class="col d-flex justify-content-center">
                      <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={bus} />
                        <Card.Body>
                          <Card.Title>Isomorpic Web App</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <a href="##"><p>Read more</p></a>
                        </Card.Body>
                      </Card>
                      </div>
                   </Col>
                   <Col md={4}>
                   <div class="col d-flex justify-content-center">
                      <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={layer} />
                        <Card.Body>
                          <Card.Title>Isomorpic Web App</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <a href="##"><p>Read more</p></a>
                        </Card.Body>
                      </Card>
                      </div>
                   </Col>
                   <Col md={4}>
                   <div class="col d-flex justify-content-center">
                      <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={asdasd} />
                        <Card.Body>
                          <Card.Title>Isomorpic Web App</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <a href="##"><p>Read more</p></a>
                        </Card.Body>
                      </Card>
                      </div>
                   </Col> 
                   <Col md={12}>
                   <div class="casebtnarea d-flex justify-content-center">
                   <input type="button" class="btn btn-outline-primary homebtn" value="View All  >>"/>
                   </div>
                   </Col>                                     
               </Row>
           </Container>
    );
};

export default Case;