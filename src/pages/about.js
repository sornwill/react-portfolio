import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import Picture from './assets/me.jpg';
import Resume from './assets/Resume010220.pdf';
import './assets/style.css';

function About(){
    return (
        <>
        <Container className="about">
            <h3 className="fas fa-user-circle"> About Me</h3>
            <hr></hr>
            <Row>
                <Col xs="4">
                    <img className="img-fluid" src={Picture} alt="self"></img>
                </Col>
                <Col xs="8">
                    <br></br>
                    <p>
                         Thank you for stopping by into my portfolio. I'm currently a Brand Ambassador for Dyson. In pursuit of learning full-stack web development. Currently enrolled in Coding Boot Camp offered by University of
                        Minnesota. I have experiences with customer service, SAP, C, HTML, CSS, JS, and more. 
                    </p>
                    <br></br>
                    <p>
                         You can also find my resume<a href={Resume} target="_blank" alt="resume" rel="noopener noreferrer"><u>here</u></a>.                        
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default About;