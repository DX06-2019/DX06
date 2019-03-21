import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import FirebaseSingleValue from '../../custom/FirebaseSingleValue';
import ListBox from "./../../custom/ListBox";

import "./CustomAddedCss.css"

  var divStyle1 = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 3,
    paddingRight: 3,
    marginTop: 2,
    lineHeight: 2.1,
  };

var divStyle2 = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 3,
  paddingRight: 3,
  marginTop: 2,
  lineHeight: 2.1,
};

var divStyle3 = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 3,
  paddingRight: 3,
  lineHeight: 2.1,
};

var divStyle4 = {
  paddingBottom: 1,
  marginBottom: 1,
};

const AdminCardSection2 = () => {
  return (
    <MDBRow /* className="mb-2" */ style={divStyle4}>
        <MDBCol /* xl="3"  md="8"className="mb-2" */ style={divStyle4}>
          <div>
            <div className="row">
              <div className="col-sm-6" style={divStyle1}>
              <ListBox>
                <div><span>Total Predicted Usages for Today:</span></div>
                <div >
                  <span>On-Peak: </span>
                  <span><FirebaseSingleValue field="predictedOnPeak"></FirebaseSingleValue></span>
                  <span> kWh</span></div>
                <div>
                  <span>Mid-Peak: </span>
                  <span><FirebaseSingleValue field="predictedMidPeak"></FirebaseSingleValue></span>
                  <span> kWh</span></div>
                {/* <div>
                  <span>Off-Peak: </span>
                  <span><FirebaseSingleValue field="predictedOffPeak"></FirebaseSingleValue></span>
                  <span> kWh</span>
                </div> */}
                {/* <FirebaseSingleValue collection="realtime_data" doc="singleValues" field="powerByGrid"></FirebaseSingleValue> */}
              </ListBox>
              </div>
              <div className="col-sm-6" style={divStyle2}>
              <ListBox>
                <div><span>Battery Allocation for Today:</span></div>
                <div>
                  <span>On-Peak: </span>
                  <span><FirebaseSingleValue field="batteryAllocOnPercent"></FirebaseSingleValue></span>
                  <span>% (</span>
                  <span><FirebaseSingleValue field="batteryAllocOnPeak"></FirebaseSingleValue></span>
                  <span> kWh)</span>
                </div>
                <div>
                  <span>Mid-Peak: </span>
                  <span><FirebaseSingleValue field="batteryAllocMidPercent"></FirebaseSingleValue></span>
                  <span>% (</span>
                  <span><FirebaseSingleValue field="batteryAllocMidPeak"></FirebaseSingleValue></span>
                  <span> kWh)</span>
                </div>
              </ListBox>
              </div>
            </div>
          </div>

          {/* <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <p className="white-text">SALES</p>
              <h4><strong>$2000</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Better than last week (25%)</p>
            </MDBCardBody>
          </MDBCard> */}
          </MDBCol>
        <MDBCol /* xl="3" */ md="4" /* className="mb-2" */ style={divStyle3}>
          <ListBox>
            <div>
              <span>Real-Time Power Usage: </span>
              <span><FirebaseSingleValue field="rPowerUsage"></FirebaseSingleValue></span>
              <span> kW</span>
            </div>
            <div>
              <span>Battery: </span>
              <span><FirebaseSingleValue field="batteryPercent"></FirebaseSingleValue></span>
              <span>%</span>
            </div>
            <div>
              <span>Power Used Yesterday: </span>
              <span><FirebaseSingleValue field="lastDayPower"></FirebaseSingleValue></span>
              <span> kWh</span>
            </div>
          </ListBox>
          {/* <MDBCard color="warning-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-line"/>
              </div>
              <p className="white-text">SUBSCRIPTIONS</p>
              <h4><strong>200</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Worse than last week (25%)</p>
            </MDBCardBody>
          </MDBCard> */}
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection2;

