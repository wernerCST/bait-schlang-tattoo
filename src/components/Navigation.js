import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' className='nav-bar'>
                <Container>
                    <a href="/">Hidden brand</a>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id='responsive-navbar-nav' className='temp'>
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
