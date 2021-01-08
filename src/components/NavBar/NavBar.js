import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Pokedesk</Navbar.Brand>
            </Navbar>
        </>
    )
}

export default NavBar