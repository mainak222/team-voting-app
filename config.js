import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBeX47ZRuACEvFrDK1yd6ECvMuf-FE4cIE",
    authDomain: "team-voting-app-ac016.firebaseapp.com",
    projectId: "team-voting-app-ac016",
    storageBucket: "team-voting-app-ac016.appspot.com",
    messagingSenderId: "972037050604",
    appId: "1:972037050604:web:4f5a910d945fed26a9d5c9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();