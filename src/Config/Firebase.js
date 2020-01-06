import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUyaBGIDb68-fLEAHlX6kGqe8Y4L4wx7g",
    authDomain: "boostup-busine.firebaseapp.com",
    databaseURL: "https://boostup-busine.firebaseio.com",
    projectId: "boostup-busine",
    storageBucket: "boostup-busine.appspot.com",
    messagingSenderId: "741315244291",
    appId: "1:741315244291:web:022fe5b2ae730951e5b936"
};
firebase.initializeApp(firebaseConfig);

export default firebase;