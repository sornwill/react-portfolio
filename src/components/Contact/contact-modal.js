import React from 'react';
import {Col, Container, Row , Button} from 'react-bootstrap';

//Going to make Modal later
function Contact(){
    
    return (
        <>
        <Container className="about">
            <h3 className="fas fa-user-circle"> Contact</h3>
            <hr></hr>
            <Row>
                <Col>
                <div class="row">
                            <div class="col-sm-12 contact-list">
                                <i class="fas fa-envelope"></i> sornwilliam@gmail.com
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 contact-list">
                                <i class="fas fa-phone-square"></i> (612) 598-8999
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-sm-12 contact-list">
                                <a class="fab fa-github-alt" href="https://github.com/sornwill" target="_blank" rel="noopener noreferrer"> GitHub</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 contact-list">
                                <a class="fab fa-linkedin" href="https://linkedin.com/in/williamsorn" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 contact-list">
                                <a class="fab fa-angellist" href="https://angel.co/u/william-sorn" target="_blank" rel="noopener noreferrer"> AngelList</a>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};


export default Contact;