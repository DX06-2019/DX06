import React, { Component } from 'react';
import firebase from 'firebase';

class DebugComp extends Component {    
    constructor(props){
        super(props);

        this.state = {
            collection: this.props.collection || "realtime_data",
            doc: this.props.doc || "singleValues",
            field: this.props.field || "batteryPercent",
            ["DATA"]: "loading..."
         }
    }

    componentDidMount(){
        const db = firebase.firestore();

        db.collection(this.state.collection).doc(this.state.doc).get().then(document =>{
            this.setState({
                ["DATA"]: document.data()[this.state.field]
            });
        });
    }

    render() {
        return (            
            <div>
                {this.state.DATA}
            </div>
        );
    }
}

export default DebugComp;



// db.collection("users").document("frank").update(
//     "age", 13,
//     "favorites.color", "Red"
// );