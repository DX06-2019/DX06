import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

var divStyle = {
    color: '#BCBCBC',
    background: '#060606',
    textAlign: 'center',

    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 'normal',
  };

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    
    render() {
        return (            
            <div style={divStyle}>
                <span>Dashboard</span>
            </div>
        );

        // return (            
        //     <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        //         <MDBNavbarBrand href="/">
        //             <strong>Dashboard</strong>
        //         </MDBNavbarBrand>
        //         <MDBNavbarToggler onClick = { this.onClick } />
        //         <MDBCollapse isOpen = { this.state.collapse } navbar>
        //         </MDBCollapse>
        //     </MDBNavbar>
        // );
    }
}

export default TopNavigation;