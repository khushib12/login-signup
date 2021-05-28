import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCZtY8Y9T-sXJQrPlbHuyFslbJtDfkk778",
    authDomain: "sinup-664ff.firebaseapp.com",
    projectId: "sinup-664ff",
    storageBucket: "sinup-664ff.appspot.com",
    messagingSenderId: "619670661106",
    appId: "1:619670661106:web:3eed4a3bb268a27fa7ad6b",
    measurementId: "G-N20DYRDLY2"
  };


  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;