import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import ReactDOM from "react-dom";
import firebase from 'firebase';
import FirebaseSingleValue from '../custom/FirebaseSingleValue';


const textStyleGrid =  {
    position: 'absolute',
    color: '#BCBCBC',
    top: 160,
    left: 28,
    fontSize: 15,
    textAlign: 'center'
}
const textStyleHouse =  {
    position: 'absolute',
    color: '#BCBCBC',
    top: 160,
    left: 188,
    textAlign: 'center'
}
const textStyleBattery =  {
    position: 'absolute',
    color: '#BCBCBC',
    top: 277,
    left: 115,
    textAlign: 'center'
}

const containerStyle = {
    position: 'relative',
    color: 'white',
    textAlign: 'center'
}

var divStyleImg = {
    width: '100%',
    height: 323,
}

const testing =  {
    position: 'absolute',
    color: '#BCBCBC',
    top: 305,
    left: 70,
    fontSize: 13.5
}

class PowerFlow extends Component {
    constructor(props){
        super(props);

        this.state = {
            collection: 'realtime_data',
            gifPath: 'https://i.imgur.com/6tim8F4.png'
         }
    }

    componentDidMount(){
        const db = firebase.firestore();

        //Temp commented out:
        db.collection(this.state.collection).onSnapshot(snapshot =>{
             let changes = snapshot.docChanges();
            
             changes.forEach(change => {
                 if (change.doc.data().gifVersion !== this.state.gifPath){
                    // console.log("new GIF", change.doc.data());
                    this.setState(() => ({gifPath: change.doc.data().gifVersion}));
                 }
             });
         });
    }

    render() {
        return (
            <div className="Bunty" style={containerStyle}>
                <div style={containerStyle}>
                    <div style={textStyleGrid}><span><FirebaseSingleValue field="grid1"></FirebaseSingleValue></span> 
                    <span style={{fontSize: 13.5}}> kW</span>
                    </div>
                    <div style={textStyleHouse}><span><FirebaseSingleValue field="home1"></FirebaseSingleValue></span> 
                    <span style={{fontSize: 13.5}}> kW</span>
                    </div>
                    <div style={textStyleBattery}><span><FirebaseSingleValue field="battery1"></FirebaseSingleValue></span> 
                    <span style={{fontSize: 13.5}}> kW</span>
                    </div>

                    <div><img style={divStyleImg} src={this.state.gifPath}></img></div>
                   
                </div>
            </div>
        );
    }
}

export default PowerFlow;