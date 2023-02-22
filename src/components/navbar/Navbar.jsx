import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'


export default function NavBar () {

  return (
    <>

    <Navbar collapseOnSelect expend="lg" className='my-2'>
        <Container>
        <Navbar.Brand md='2'>
            <img src={logo} className="App-logo" alt="logo" height={45}/>
            <Link to="/">Tdb</Link>
        </Navbar.Brand>

        
        <Navbar.Collapse id="responsive-navbar-nav" md='10' className='d-flex justify-content-end'>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link><Link to="/product">Product</Link></Nav.Link>        
            </Nav>

        </Navbar.Collapse>
        </Container>
    </Navbar>

    </>
  )
}
