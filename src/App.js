import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import './index.css';
import FirebaseSingleValue from './components/custom/FirebaseSingleValue';
import firebase from 'firebase';
import Sidebar from "react-sidebar";
// import sidebarcontent from './sidebar'

var divStyleMain = {
  justifyContent: 'center',  
  maxWidth: 800,
  maxHeight: 480,
  margin: '0 auto',
}

var divStyle = {
  background: "#141414",
  paddingTop: 5,
  paddingLeft: 10,
  paddingRight: 10,
  marginLeft: 5,
  marginRight: 5,
}

var sidebarStyle = {
  background: '#0F0F0F', 
  zIndex: 10
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
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
        <div className="flexible-content" style={divStyleMain}>
          <TopNavigation sideOpen={this.onSetSidebarOpen} />
          <main id="content" style={divStyle}>
          <Routes />
          </main>
          <Sidebar
            sidebar={
              <div className="btn-group">
                <ul className='sidebar-ul'>
                  <li className='sidebar-li'><div><a href='/dashboard'>Dashboard</a></div></li>
                  <li className='sidebar-li'><div><a href='/usage'>Usage and Savings</a></div></li>
                  <li className='sidebar-li'><div><a href='/utility'>Utility Rates</a></div></li>
                  <li className='sidebar-li'><div><a href='/about'>About</a></div></li>
                </ul>
              </div>
              }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: sidebarStyle }}>
          </Sidebar>
        </div>
    );
  }
}

export default App;
