import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import FirebaseSingleValue from './components/custom/FirebaseSingleValue'
import firebase from 'firebase';
var divStyleMain = {
  background: "#141414",
}

var divStyle = {
  background: "#141414",
  paddingTop: 5,
  paddingLeft: 10,
  paddingRight: 10,
  marginLeft: 5,
  marginRight: 5,
}

const config = {
    apiKey: "AIzaSyD6ELRVu77cgZ-vZAxZxV1CJI1b-VRyMDo",
    authDomain: "edp2019-3ffda.firebaseapp.com",
    databaseURL: "https://edp2019-3ffda.firebaseio.com",
    projectId: "edp2019-3ffda",
    storageBucket: "edp2019-3ffda.appspot.com",
    messagingSenderId: "1008420479112"
};
firebase.initializeApp(config);

//To quickly delete
// const db = firebase.firestore();
// db.collection("realtime_dssata").doc("predictVsdssActual").delete();

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content" style={divStyleMain}>
          <TopNavigation />
          {/* <SideNavigation /> */}
          <main id="content" style={divStyle}/* className="p-3" */>
            <Routes />
          </main>
        </div>
    );
  }
}

export default App;
