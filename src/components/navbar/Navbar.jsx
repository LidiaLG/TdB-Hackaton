import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logo.png'



export default function Navbar() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt=""/>
                    
                    <Navbar.Text > <Link className="text-decoration-none  text-white"  to={'/'}>Soundwave</Link> </Navbar.Text>
                </Navbar.Brand>

                
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white text-xl" ><Link  className="text-decoration-none text-white  " to={'/Discover'}>Discover</Link></Nav.Link>
                        <Nav.Link ><Link className="text-decoration-none text-white " to={'/Join'}>Join</Link></Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>

    )
}
