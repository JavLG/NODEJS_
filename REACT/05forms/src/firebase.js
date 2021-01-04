import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCYQVFs4FCFzhhKSZwjPAKwhV1YZ_7WHZI",
  authDomain: "formstest-f3b58.firebaseapp.com",
  databaseURL: "https://formstest-f3b58-default-rtdb.firebaseio.com",
  projectId: "formstest-f3b58",
  storageBucket: "formstest-f3b58.appspot.com",
  messagingSenderId: "639977874687",
  appId: "1:639977874687:web:84083d6aaaa1d9c25158ca"
};

firebase.initializeApp(config);



const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

firebaseDB.ref().set({name:'Francis',lastname:'Jones',age:20,height:186}).then(() => {console.log('Updated DB')}).catch( (e) => { console.log(e)})

export {
    firebase,
    firebaseDB,
    googleAuth
}

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val());
// })