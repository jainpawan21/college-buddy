import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap'; 
import { NavLink } from 'react-router-dom';


class Header extends Component{
    state = {
        isNavOpen : false,

    };

  toggleNav = () => {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  render() {
      return(
          <React.Fragment>
              
              <Navbar className="navbar-light" style={{backgroundColor: "#ffffff"}} expand="sm">
              <div className="container">
                  
                  <NavbarBrand className="mr-auto" href="/">
                     College Buddy
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                       <Nav className="ml-auto" navbar>

                           <NavItem>
                               <NavLink className="nav-link" to="/">
                                   <span className="fa fa-home fa-lg"></span> Home
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to="/papers">
                                   <span className="fa fa-info fa-lg"></span> Papers
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to="/timetable">
                                   <span className="fa fa-list fa-lg"></span> TImeTable
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to="/discussion">
                                   <span className="fa fa-address-card fa-lg"></span> Discussion
                               </NavLink>
                           </NavItem>
                           
                       </Nav>
                       {/* <Nav className='ml-auto' navbar>
                           <NavItem>
                               <Button outline onClick={this.toggleModal}>
                                  <span className="fa fa-sign-in fa-lg"></span> Login
                               </Button>
                           </NavItem>
                       </Nav> */}
                  </Collapse>
              </div>
              </Navbar>
              <hr style={{position: 'relative', marginTop: '0'}}/>
          </React.Fragment>
      );
  }
}
export default Header;