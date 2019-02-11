import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';
import Diagram from '../../custom/Diagram';

var divStyleImg = {
    background: "#141414",
    width: "100%",
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
    render(){
        /* const dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                label: '#1',
                data: [12, 39, 3, 50, 2, 32, 84],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: '#2',
                data: [56, 24, 5, 16, 45, 24, 8],
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: '#3',
                data: [12, 25, 54, 3, 15, 44, 3],
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

        const dataPie = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                data: [300, 50, 100, 40, 120, 24, 52],
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
            }
            ]
        } */
        return (
            <MDBRow /* className="mb-2" */>
                <MDBCol md="8"/* className="mb-2" */ style={divStyleContainer1}>
                    <MDBCard className="mb-1">
                        <div>
                            <img style={divStyleImg} src="https://i.imgur.com/Jj0VHkf.png"></img>
                        </div>
                    </MDBCard>
                    {/* <MDBCard className="mb-2">
                        <MDBCardBody>
                            <Bar data={dataBar} height={300} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard> */}
                </MDBCol>
                <MDBCol md="4" /* className="mb-2" */ style={divStyleContainer2}>
                    <MDBCard className="mb-1" >
                    <div>
                            <img style={divStyleImg} src="https://i.imgur.com/4tWawE8.png"></img>
                        </div>
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

