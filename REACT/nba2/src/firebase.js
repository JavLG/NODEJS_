import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC_WVfrTLSp0CMZ-q4Ur94k-CRgqWNgugo",
  authDomain: "nbafullstack-a13bb.firebaseapp.com",
  databaseURL: "https://nbafullstack-a13bb-default-rtdb.firebaseio.com",
  projectId: "nbafullstack-a13bb",
  storageBucket: "nbafullstack-a13bb.appspot.com",
  messagingSenderId: "801996471381",
  appId: "1:801996471381:web:64776f95a5cde52a9768dc"

};
// Initialize Firebase
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id:childSnapshot.key
    })

  });
  return data;
}


export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
}