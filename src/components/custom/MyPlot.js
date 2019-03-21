import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import ReactDOM from "react-dom";
import firebase from 'firebase';

const NUM_DATA_POINTS = 300;

class MyPlot extends Component {
    constructor (props){
        super(props);

        this.state = {
            collection: this.props.collection || "plotData",
            doc: this.props.doc || "singleValues",
            field: this.props.field || "batteryPercent",
            ["DATA"]: "loading...",
            plotWidth: '526',
            plotDataX: [],
            plotDataY: [],
            dataCollectionStartTime: new Date()
         }

         this.gotNewPlotData = this.gotNewPlotData.bind(this);
         this.AddToInitialData = this.AddToInitialData.bind(this);
    }
    
    AddToInitialData(x, y){
        var newX = this.state.plotDataX.slice();
        var newY = this.state.plotDataY.slice();

        newX.push(x);
        newY.push(y);

        this.setState(() => ({
            plotDataX: newX,
            plotDataY: newY
        }));
    }

    gotNewPlotData(timestamp, y){
        if (timestamp  === undefined || y  === undefined) return;
        
        const x = timestamp.toDate();

        const { plotDataX} = this.state;

       if(plotDataX.length === NUM_DATA_POINTS)  this.setState(({plotDataX, plotDataY})=>{
          const [ firstX, ...restX ] = plotDataX;
          const [ firstY, ...restY ] = plotDataY;
          return {
            plotDataX: [...restX, x],
            plotDataY: [...restY, y],
            };}
        );

       else this.setState(({plotDataX, plotDataY})=>({
            plotDataX: [...plotDataX, x],
            plotDataY: [...plotDataY, y],
            }
        ));
    };
    
    debugMethod(){
         /* const x = Math.floor(Math.random()*10);
         const y = Math.floor(Math.random()*10);
         console.log(x,y);
         this.gotNewPlotDataTest(x,y); */
        this.AddEntry();
    }

    AddEntry(){
        const db = firebase.firestore();

        db.collection(this.state.collection).add({
            timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
            actual: Math.floor(Math.random()*10)
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    componentDidMount(){
        const db = firebase.firestore();
        const gotNewPlotData = this.gotNewPlotData;
        const AddToInitialData = this.AddToInitialData;
        const GetDate = this.GetDate;

        db.collection(this.state.collection).orderBy("timestamp", "desc").limit(NUM_DATA_POINTS).get().then(function(querySnapshot) {
            let newX = [];
            let newY = [];
            querySnapshot.forEach(function(doc) {
                if (doc.data().timestamp  === undefined || doc.data().actual  === undefined) return;
                var x = doc.data().timestamp.toDate();
                var y = doc.data().actual;
                newX.push(x);
                newY.push(y);
            });

            newX.reverse();
            newY.reverse();

            for(let i = 0; i < newX.length; i++){
                AddToInitialData(newX[i],newY[i]);
            }
        }).then(() =>{
            this.setState(() => ({
                dataCollectionStartTime: this.state.plotDataX[this.state.plotDataX.length-1]
            }));
        }).then(() =>{
            db.collection(this.state.collection).onSnapshot(snapshot =>{
                let changes = snapshot.docChanges();
            
                changes.forEach(change => {
                    if (change.doc.data().timestamp !== undefined && change.doc.data().timestamp.toDate() > this.state.dataCollectionStartTime){
                    console.log("new data event", change, change.doc.data());
                    gotNewPlotData(change.doc.data().timestamp, change.doc.data().actual);
                    }
                    
                });
            });

            this.setState(() => ({
                plotWidth: ReactDOM.findDOMNode(this).offsetWidth,
            }));
        });
    }

    render() {
        return (
            <div>
                <Plot
                    data={[
                        {
                            
                            x: this.state.plotDataX,
                            y: this.state.plotDataY,
                            type: 'scatter',
                            mode: 'lines+points',
                            marker: {color: '#A11B1B'},
                        }]}
                    layout={ 
                        {
                        width:this.state.plotWidth,
                        height:315,
                        title: 'Real-Time Power',
                        titlefont: {
                            family: 'Roboto, sans-serif',
                            size: 14,
                            color: 'BCBCBC'
                        },
                        plot_bgcolor: '#141414',
                        paper_bgcolor: '#141414',
                        autosize: false,
                        margin: {
                            l: 48,
                            r: 20,
                            b: 24,
                            t: 30,
                            pad: 4
                            },

                            xaxis: {
                                tickfont: {
                                    family: 'Roboto, sans-serif',
                                    size: 12,
                                    color: 'BCBCBC'
                                },
                                showgrid: true,
                                zeroline: true,
                                showline: true,
                                mirror: 'ticks',
                                gridcolor: '#242424',
                                gridwidth: 1,
                                zerolinecolor: '#242424',
                                zerolinewidth: 1,
                                linecolor: '#242424',
                                linewidth: 1,
                                showticklabels: false,
                              },
                              yaxis: {
                                title: 'Power Usage (kW)',
                                titlefont: {
                                    family: 'Roboto, sans-serif',
                                    size: 12,
                                    color: 'BCBCBC'
                                },
                                tickfont: {
                                    family: 'Roboto, sans-serif',
                                    size: 11,
                                    color: 'BCBCBC'
                                },
                                showgrid: true,
                                zeroline: true,
                                showline: true,
                                mirror: 'ticks',
                                gridcolor: '#242424',
                                gridwidth: 1,
                                zerolinecolor: '#242424',
                                zerolinewidth: 1,
                                linecolor: '#242424',
                                linewidth: 1
                              }
                        } }
                    config={ {displayModeBar: false, responsive:true} }
                />
          </div>
        );
    }
}

export default MyPlot;