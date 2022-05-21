import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Link className="nav-link" to="/">DashBoard</Link>
                        <Link className="nav-link" to="/aboutus">About Us</Link>
                        <Link className="nav-link" to="/customer">Customer</Link>
                        
                        */}
                        <NavLink activeClassName="active" className="nav-link" to="/">Login</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/dashboard">DashBoard</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/aboutus">About Us</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/customer">Customer</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/product-list">ProductList</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/addproduct">Add Product</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/emp">EmpDetails</NavLink>
                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;