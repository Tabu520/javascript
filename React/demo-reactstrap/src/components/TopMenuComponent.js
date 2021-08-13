import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  Link
} from "react-router-dom";
import { CartContext } from '../context/Cart';

class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md" style={{ margin: "0 20px" }}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <CartContext.Consumer>
                  {
                    ({ cartItems }) => <Link to="/cart">Cart ({cartItems.length})</Link>
                  }
                </CartContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopMenu;