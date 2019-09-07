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
              
              <Navbar className="navbar-light shadow" sticky={'top'} style={{backgroundColor: "#ffffff"}} expand="sm">
              <div className="container">
                  
                  <NavbarBrand className="mr-auto" href="/">
                     IndianTechRishu
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} className="mr-2" style={{outline: 'none'}}/>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                       <Nav className="ml-auto" navbar>

                           <NavItem className="ml-auto mr-auto" onClick={this.toggleNav}>
                               <NavLink className="nav-link" to="/">
                                   Home
                               </NavLink>
                           </NavItem>
                           <NavItem className="ml-auto mr-auto" onClick={this.toggleNav}>
                               <NavLink className="nav-link" to="/papers">
                                 Papers
                               </NavLink>
                           </NavItem>
                           <NavItem className="ml-auto mr-auto">
                               <NavLink className="nav-link" to="/notes" onClick={this.toggleNav}>
                                  Notes
                               </NavLink>
                           </NavItem>
                           <NavItem className="ml-auto mr-auto">
                               <NavLink className="nav-link" to="/timetable" onClick={this.toggleNav}>
                                  TImeTable
                               </NavLink>
                           </NavItem>
                           <NavItem className="ml-auto mr-auto">
                               <NavLink className="nav-link" to="/discussion" onClick={this.toggleNav}>
                                Discussion
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