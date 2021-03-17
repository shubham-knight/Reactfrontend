import React from 'react';
import { Container, Row, Col, Card, InputGroup, FormControl, Form } from "react-bootstrap";

function Feedback(){
    return (
          <Container fluid>
              <Row>
                  <Col md={6} className="feedcol1"></Col>
                  <Col md={6} className="feedcol2">
                  <Card style={{ width: '30rem' }}>
                     <Card.Body>
                       <Card.Title><h3>Send Us Message</h3></Card.Title>
                       <Form>
                       <InputGroup className="mb-2">
                          <FormControl placeholder="Your Email*" aria-label="Email" aria-describedby="basic-addon2" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <FormControl placeholder="Your Name*" aria-label="Name" aria-describedby="basic-addon2" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <FormControl placeholder="Phone Number*" aria-label="Phone Number" aria-describedby="basic-addon2" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <FormControl placeholder="Subject*" aria-label="Subject" aria-describedby="basic-addon2" />
                        </InputGroup>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Your Message" as="textarea" rows={3} />
                        </Form.Group>
                        <InputGroup className="mb-3">
                        <table>
                            <tr>
                                <tb><input name="isGoing" type="checkbox" /></tb>
                                <tb> By sending this message, you confirm that you have read and agreed to our privacy-policy.</tb>
                            </tr>
                        </table>
                        
                        </InputGroup>
                        
                        <input type="button" class="btn btn-outline-primary feedbtn" value="Send"/>
                       </Form>
                     </Card.Body>
                   </Card>
                  </Col>
              </Row>
          </Container>
    );
};

export default Feedback;