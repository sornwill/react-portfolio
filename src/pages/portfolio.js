import React from 'react';
import { Container, Col, Row, Card, Button} from 'react-bootstrap';
import Project from '../components/Projects/projects';
import data from '../projectsdb.json';


function Portfolio(props){
    return (
      <>
      
      <Container className="portfolio">
      <h3><i className="fas fa-folder-open"></i>Portfolio</h3>
      <hr></hr>
          <Row>
                {data.map(data => (
                    <Project
                        name={data.name}
                        url={data.url}
                        deploy={data.deployURL}
                        img={data.img}
                    />
                ))}
          </Row>
      </Container>
      </>
    );
};

export default Portfolio;