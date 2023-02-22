import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logo.png'



export default function NavbarTop() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt=""/>
                    
                    <Navbar.Text > Soundwave</Navbar.Text>
                </Navbar.Brand>

                
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white text-xl" >Discover</Nav.Link>
                        <Nav.Link >Join</Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>

    )
}
