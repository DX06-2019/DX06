import React, { Component, Fragment } from 'react';
import Burger  from '../assets/burger';

var divStyle = {
    color: '#BCBCBC',
    background: '#060606',
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 'normal',
  };

  var burgerStyle = {
    color: 'white',
    float:'left',
    cursor: 'pointer'
}

class TopNavigation extends Component {
    state = {
        collapse: false,
        someText: 'sometextisthis'
    }

/*     onClick = () => {
        console.log("JARRO");
        this.setState({
            someText: "JARRO",
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    } */

    
    render() {
        return (
            <Fragment>
                <div onClick={()=>{this.props.sideOpen(true)} } style={{
                          zIndex: 9,
                          position: 'absolute',
                          top:-3.15,
                          cursor: 'pointer',
                          color:'white'
                        }}>
                            <Burger></Burger>
                        </div>
                <div style={divStyle}>
                    <span>Dashboard</span>
                </div>
            </Fragment>
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