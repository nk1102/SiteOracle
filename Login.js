

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
var  firebaseConfig = {
  apiKey: "AIzaSyD804xBhcN5swK-Buq13q2V_OK4c2optQ4",
  authDomain: "site-oracle.firebaseapp.com",
  projectId: "site-oracle",
  storageBucket: "site-oracle.appspot.com",
  messagingSenderId: "968371403424",
  appId: "1:968371403424:web:6a33e673b5cb404d5627c5",
  measurementId: "G-P1DQM9Y870"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login(event){
    event.preventDefault()
    document.getElementById('loadingscreen').style.display = "block";
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => { 
      var user1 = userCredential.user;
      document.getElementById('loadingscreen').style.display = "none";
      console.log('login successfull')
      document.getElementById("loginform").reset();
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'dashboard.html'; 
        }
      });
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      
      document.getElementById('loadingscreen').style.display = "none";
      
      document.getElementById("loginform").reset()
    });
  }