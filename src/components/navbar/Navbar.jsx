import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart, } from "react-icons/ai";
 import { BsFillPersonFill } from "react-icons/bs";
 import styles from './Navbar.module.css'



export default function NavBar () {

  return (
    <>

    <Navbar className='my-2 '  style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(192, 101, 0, 1))' }}>
        <Container>
        <Navbar.Brand md='2' >
        <Link to="/"> <img src={logo} className="" alt="logo" height={60}/> </Link>
        </Navbar.Brand>
        <Nav> 
          <h1>TDB</h1>
        </Nav>
        

        
        <Navbar.Collapse id="responsive-navbar-nav" md='10' className='d-flex justify-content-end '>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/product"><AiOutlineShoppingCart className={styles.icon}/></Link></Nav.Link>
                <Nav.Link><AiFillHeart className={styles.icon}/></Nav.Link>
                <Nav.Link><AiOutlineSearch className={styles.icon}/></Nav.Link>
                <Nav.Link><Link to="/login"><BsFillPersonFill className={styles.icon}/></Link></Nav.Link>        
            </Nav>

        </Navbar.Collapse>
        </Container>
    </Navbar>

    </>
  )
}
