import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import triangle from "../img/Group 35700.png";
import reactlogo from "../img/React-icon.png";
import aws from "../img/Amazon_Web_Services_Logo-1.png";
import cloud from "../img/Google_Cloud_Logo.png";
import redux from "../img/redux-logo.png";
import jslogo from "../img/Path 37519.png";
import sflogo from "../img/g10-1.png";
import node from "../img/Mask Group 3.png";
import firebase from "../img/_Path_3.png"; 

function Tech(){
    return(
        <Container fluid className="tech">
         <Row>
             <Col md={12}>
                 <img src={triangle} alt="triangle"></img>
                 <h1>Core Technologies</h1>
                 <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                 <div Style={"text-align: center"}>
                 <div class="btn-group">
                  <button type="button" class="btn btn-round btn-default">Design</button>
                  <button type="button" class="btn btn-mid btn-default">Development</button>
                  <button type="button" class="btn btn-round btn-default">Marketing</button>
                 </div></div>
                 <div className="techtool">
                     <div className="techbox"><img className="techtoolimg" src={reactlogo} alt="react"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={aws} alt="aws"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={cloud} alt="cloud"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={redux} alt="redux"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={sflogo} alt="sflogo"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={node} alt="node"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={firebase} alt="firebase"></img></div>
                 </div>
                 <div className="techtool">
                     <div className="techbox"><img className="techtoolimg" src={jslogo} alt="jslogo"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={sflogo} alt="sflogo"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={cloud} alt="cloud"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={node} alt="node"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={reactlogo} alt="react"></img></div>
                     <div className="techbox"><img className="techtoolimg" src={firebase} alt="firebase"></img></div>
                 </div>
             </Col>
             <Col md={12}></Col>
         </Row>
        </Container>
    );
};

export default Tech;