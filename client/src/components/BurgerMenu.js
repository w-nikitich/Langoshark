import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function BurgerMenu() {
    return(
        // when authorized
        <div className="burger__menu">
            <Navbar expand="md">
                <Navbar.Toggle aria-controls="burger-menu-nav"/>
                <Navbar.Collapse id="burger-menu-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Профіль</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default BurgerMenu;