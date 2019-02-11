import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6ELRVu77cgZ-vZAxZxV1CJI1b-VRyMDo",
    authDomain: "edp2019-3ffda.firebaseapp.com",
    databaseURL: "https://edp2019-3ffda.firebaseio.com",
    projectId: "edp2019-3ffda",
    storageBucket: "edp2019-3ffda.appspot.com",
    messagingSenderId: "1008420479112"
};
firebase.initializeApp(config);

export default Firestore;