import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

var divStyle = {
    height: 340,
    textAlign: 'center',
  };

class Diagram extends Component {
    componentDidMount(){
        // divStyle['height'] = this.props.height;
    }

    render() {
        return (            
            <div style={divStyle}>
                
                <ul className="list-group">                
{/*                     <li className="list-group-item">{this.props.height}</li>
 */}                </ul>
            </div>
        );
    }
}

export default Diagram;