import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const Sitebar = (props) => {
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Reviews</NavbarBrand>
            <NavbarBrand href="/signin">Sign In</NavbarBrand>
            <NavbarBrand href="/signup">Sign Up</NavbarBrand>
        </Navbar>
    )
}

export default Sitebar;

/*
import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';

const Sitebar = (props) => {
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;
*/