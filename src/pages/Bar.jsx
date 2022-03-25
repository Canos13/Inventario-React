import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Bar = () => {
  return (
    <>

        <Navbar collapseOnSelect expand='lg'variant='dark' bg='dark'>
            <Navbar.Brand className='mx-3'>
                Inventario
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' >
                <Nav>
                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">       
          <Link 
              className="navbar-brand" 
              to="/"
          >
              INICIO
          </Link>

          <div className="navbar-collapse">
              <div className="navbar-nav">
                  <NavLink 
                      activeclassname="active"
                      className="nav-item nav-link" 
                      to="/dashboard"
                  >
                      Dashboard
                  </NavLink>

              </div>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                  <NavLink 
                      activeclassname="active"
                      className="nav-item nav-link" 
                      to="/login"
                  >
                      Logout
                  </NavLink>
              </ul>
          </div>
      </nav> */}


      <section>
          <Outlet />
      </section>
    </>
  )
}
