import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

class ListBox extends Component {  
    render() {
        return (
            <div>
            {React.Children.map(this.props.children, (child, i) => {
              return <li key={i} className="list-group-item">{child}</li>
            })}
          </div>
        );
    }
}

export default ListBox;