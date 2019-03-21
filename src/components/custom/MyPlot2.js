import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import ReactDOM from "react-dom";
import firebase from 'firebase';

class MyPlot2 extends Component {
    constructor (props){
        super(props);

        this.state = {
            collection: this.props.collection || "realtime_data",
            doc: this.props.doc || "singleValues",
            plotWidth: '11',
            trace1: {
                x: ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
                y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                type: 'bar'
            },
            trace2: {
                x: ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
                y: [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
                type: 'bar'
            },
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

    gotNewPlotData(docData){
        var newY1 = [
            docData['predicted_hour7'],
            docData['predicted_hour8'],
            docData['predicted_hour9'],
            docData['predicted_hour10'],
            docData['predicted_hour11'],
            docData['predicted_hour12'],
            docData['predicted_hour13'],
            docData['predicted_hour14'],
            docData['predicted_hour15'],
            docData['predicted_hour16'],
            docData['predicted_hour17'],
            docData['predicted_hour18'],

        ];

        var newY2 = [
            docData['hour7'],
            docData['hour8'],
            docData['hour9'],
            docData['hour10'],
            docData['hour11'],
            docData['hour12'],
            docData['hour13'],
            docData['hour14'],
            docData['hour15'],
            docData['hour16'],
            docData['hour17'],
            docData['hour18'],
        ];

        this.setState((prevState, props) => ({
            trace1:  {
                x: prevState.trace1.x,
                y: newY1,
                type: prevState.trace1.type,
                name: 'Predicted',
            },
            trace2: {
                x: prevState.trace2.x,
                y: newY2,
                type: prevState.trace2.type,
                name: 'Actual',
            }
        }));
    }

    componentDidMount(){
        const db = firebase.firestore();
        const gotNewPlotData = this.gotNewPlotData;

        db.collection(this.state.collection).doc(this.state.doc).get().then(document =>{
            gotNewPlotData(document.data());
        });

        db.collection('realtime_data').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            
            changes.forEach(change => {
                if(change.type != 'modified') return;
                gotNewPlotData(change.doc.data());
            });
        });

        this.setState(() => ({
            plotWidth: ReactDOM.findDOMNode(this).offsetWidth - 235,
        }));
    }

    render() {
        return (
            <div>
                <Plot
                    data={[this.state.trace1, this.state.trace2]}
                    layout={ 
                        {
                        width:526,
                        height:315,
                        title: 'Predicted vs Actual Power Usage',
                        titlefont: {
                            family: 'Roboto, sans-serif',
                            size: 14,
                            color: 'BCBCBC'
                        },
                        showlegend: true,
                            legend: {
                            x: 0,
                            y: 1,
                            font: {
                              family: 'Roboto, sans-serif',
                              size: 9,
                              color: '#BCBCBC'
                            },
                            bgcolor: 'rgba(0,0,0,0)',
                            bordercolor: 'rgba(0,0,0,0)',
                            borderwidth: 0
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
                                    size: 8.5,
                                    color: 'BCBCBC'
                                },
                                
                               /*  showgrid: true,
                                zeroline: true,
                                showline: true,
                                mirror: 'ticks',
                                gridcolor: '#242424',
                                gridwidth: 1,
                                zerolinecolor: '#242424',
                                zerolinewidth: 1,
                                linecolor: '#242424',
                                linewidth: 1,
                                showticklabels: false, */
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

export default MyPlot2;