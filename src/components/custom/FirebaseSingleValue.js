import React, { Component } from 'react';
import firebase from 'firebase';

class FirebaseSingleValue extends Component {
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

        db.collection('realtime_data').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            
            changes.forEach(change => {
                if(change.type != 'modified') return;

                this.setState({
                    ["DATA"]: change.doc.data()[this.state.field]
                });
            });
            
            
            
            //console.log(changes.get(this.state.field));
            
            // this.setState({
            //     ["DATA"]: document.data()[this.state.field]
            // });
        });
    }

    render() {
        return (            
            <span>
                {this.state.DATA}
            </span>
        );
    }
}

export default FirebaseSingleValue;