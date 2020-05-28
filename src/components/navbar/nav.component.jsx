import React, { useState } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../../components/logo/logo.component';
import Search from '../../components/search/search.component';
import MenuIcon from '../../assets/images/home/Hamburger.svg';
import Cart from '../../assets/images/home/Cart.svg';
import { NavContainer, CartIcon } from './nav.container';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavContainer>
      <Navbar color="transparent" light expand="md">
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="/components/"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                <img src={MenuIcon} alt="menu icon" style={{ paddingRight: '1rem' }} />
                Categories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Farmers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                How it works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Support
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand href="/">
            <Logo />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="/components/"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Start Selling
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                style={{
                  color: '#443E3E',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <Search />
            </NavItem>
            <NavItem>
              <CartIcon src={Cart} alt="cart" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
