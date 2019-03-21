import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';
import Diagram from '../../custom/Diagram';
import MyPlot from '../../custom/MyPlot';
import MyPlot2 from '../../custom/MyPlot2';
import PowerFlow from '../../custom/PowerFlow';

import RightArrow  from '../../../assets/rightArrow';

var barSwitchCss = {
    zIndex: 5,
    position: 'absolute',
    right: -1,
    /* top: -6, */
    bottom: -1,
    cursor: 'pointer'
}

var divStyleGraph = {
    background: "#141414",
    zIndex: 3,
}

var divStyleContainer1 = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 3,
    marginBottom: 4,
}
var divStyleContainer2 = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 3,
    paddingRight: 5,
    margin: 0,
}

class ChartSection1 extends Component {
    constructor(props) {
        super(props);
        this.state = {showSecondGraph: false};
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState((prevState) => ({
            showSecondGraph: !prevState.showSecondGraph,
        }));
        console.log(this.state.showSecondGraph);
    }

    render(){
        return (
            <MDBRow /* className="mb-2" */>
                <MDBCol md="8"/* className="mb-2" */ style={divStyleContainer1}>
                    <MDBCard className="mb-1">
                        <div onClick={this.onClick} style={barSwitchCss}>
                            <RightArrow></RightArrow>
                        </div>
                        {/* <button onClick={this.onClick} style={barSwitchCss}>Clack</button> */}
                        <div style={divStyleGraph}>
                            <div className={this.state.showSecondGraph? 'hidden' : ''}>
                                <MyPlot/>
                            </div>
                            <div className={this.state.showSecondGraph? '' : 'hidden'}>
                                <MyPlot2/>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" /* className="mb-2" */ style={divStyleContainer2}>
                    <MDBCard className="mb-1" >
                        <PowerFlow></PowerFlow>
                        {/* <div>
                            <img style={divStyleImg} src="https://i.imgur.com/4tWawE8.png"></img>
                        </div> */}
                        {/* <MDBCardHeader>Pie chart</MDBCardHeader> */}
                        {/* <MDBCardBody>
                            <Pie data={dataPie} height={370} options={{responsive: true}} />
                        </MDBCardBody> */}
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default ChartSection1;

