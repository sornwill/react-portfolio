import React from 'react';
import './style.css';
import {Card, Button} from 'react-bootstrap';



function Project(props){
    return (
        <>
        
            <Card className="box" style={{ width: '18rem' }}>
                <Card.Img className="imgBox" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Button className="links" variant="danger" href={props.url} target="_blank">Repository</Button>
                    <Button className="links" variant="danger" href={props.deploy} target="_blank">Deployed URL</Button>
                </Card.Body>
            </Card>
      
        </>
    );
};

export default Project;