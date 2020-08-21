import React from 'react';
import './style.css';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header (){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">William Sorn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
            
                </Nav>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
        </Navbar.Collapse>
        </Navbar>
    )
}






export default Header;