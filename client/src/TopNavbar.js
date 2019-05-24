import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        {/* <Nav pullRight>
          <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
        </Nav> */}
        <Nav pullRight>
          <Link to="/Profile"><Navbar.Text>Profile</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/tutorProfile"><Navbar.Text>Tutor Profile</Navbar.Text></Link>
        </Nav><Nav pullRight>
          <Link to="/reviewList"><Navbar.Text>Review List</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/reviewForm"><Navbar.Text>Add a review</Navbar.Text></Link>
          <Link to="/search"><Navbar.Text>Search for a Tutor</Navbar.Text></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
