import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Bar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand='lg'variant='dark' bg='dark'>
            <Navbar.Brand 
                className='mx-3' 
                as={NavLink}
                to="/"
            >
                ComputerCenter
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse 
                id='responsive-navbar-nav' 
                className='mx-3' 
            >
                <Nav className='me-auto' >
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/dashboard"
                    >
                        Dashboard
                    </Nav.Link>
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/inventory"
                    >
                        Inventario
                    </Nav.Link>
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/reports"
                    >
                        Reportes
                    </Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item
                            as={NavLink}
                            activeclassname="active"
                            to="/users"
                        >
                            Usuarios
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav >
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/login"
                    >
                        Iniciar Sesion
                    </Nav.Link>
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/signup"
                    >
                        Registrarse
                    </Nav.Link>
                    <Nav.Link 
                        activeclassname="active"
                        as={NavLink}
                        to="/profile"
                    >
                        Mi perfil
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     
      <section>
          <Outlet />
      </section>
    </>
  )
}
