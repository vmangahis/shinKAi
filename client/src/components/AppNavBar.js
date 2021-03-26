import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavBar = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
      <>
        <div>
      <Navbar color= "dark" dark expand="sm" className="p-5">
          <Container>
            <NavbarBrand href="#">KAI</NavbarBrand>
            <NavbarToggler onClick = {() => toggle()} />
            <Collapse isOpen={isOpen} navbar> 
                <Nav className ="ml-auto" navbar>
                    <NavItem>
                        <NavLink href = "#">Repo</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          </Container> 
      </Navbar>
    </div>
    </>
    )
}

export default AppNavBar;
