// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD-_xFDbjKXb7TexhzpY8kmJzF7xfE1ns0",
    authDomain: "webapp-bc1e9.firebaseapp.com",
    databaseURL: "https://webapp-bc1e9.firebaseio.com",
    projectId: "webapp-bc1e9",
    storageBucket: "webapp-bc1e9.appspot.com",
    messagingSenderId: "1092438804066",
    appId: "1:1092438804066:web:f4c93c5d8513e7864bb33b",
    measurementId: "G-45PN6BSGE9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Jonathan //
const _db = firebase.firestore();
const abs = _db.collection("Abs");
const legs = _db.collection("Legs");
const as = _db.collection("Arms & Shoulder");
const back = _db.collection("Back");
const booty = _db.collection("Booty");
const cardio = _db.collection("Cardio");
const chest = _db.collection("Chest");
const yoga = _db.collection("Yoga");

//maja//
const Pegasus = _db.collection("Abs").doc("Pegasus").collection("Excersises")
const Gemini = _db.collection("Arms & Shoulder").doc("Gemini").collection("Excersises")
const Hercules = _db.collection("Back").doc("Hercules").collection("Excersises")
const Fornax = _db.collection("Booty").doc("Fornax").collection("Excersises")
const Caroli = _db.collection("Cardio").doc("Cor Caroli").collection("Excersises")
const Mensa = _db.collection("Chest").doc("Mensa").collection("Excersises")
const Delphinus = _db.collection("Legs").doc("Delphinus").collection("Excersises")
const Gemma = _db.collection("Yoga").doc("Gemma").collection("Excersises")