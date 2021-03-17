import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Workflow(){
    return (
        <Container>
            <Row>
                <Col md={12} className="workflowcol1">
                    <h1>Workflow</h1>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                </Col>
                <Col md={12}>
                <Row>
                    <Col md={4}>
                    <div class="col d-flex justify-content-center">
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <input type="button" class="btn btn-light workbtn" value="Step 1"/>
                    <Card.Title>Send your brief</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                      </Card.Text>
                     </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div class="col d-flex justify-content-center">
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <input type="button" class="btn btn-light workbtn" value="Step 1"/>
                    <Card.Title>Wait for delivery</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                      </Card.Text>
                     </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div class="col d-flex justify-content-center">
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <input type="button" class="btn btn-light workbtn" value="Step 1"/>
                    <Card.Title>Get your files!</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                      </Card.Text>
                     </Card.Body>
                    </Card>
                    </div>
                    </Col>
                                                            
                </Row>
                </Col>
           </Row>
        </Container>
    );
};

export default Workflow;