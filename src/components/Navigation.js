import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.png'; 
import './Navigation.css';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' className='nav-bar'>
                <Container>
                    <img src={logo} alt="logo" height='35px' width='35px' />    
                    <Navbar.Toggle/>
                    <Navbar.Collapse id='responsive-navbar-nav' className='nav-icons'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
