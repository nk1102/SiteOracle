import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD804xBhcN5swK-Buq13q2V_OK4c2optQ4",
    authDomain: "site-oracle.firebaseapp.com",
    projectId: "site-oracle",
    storageBucket: "site-oracle.appspot.com",
    messagingSenderId: "968371403424",
    appId: "1:968371403424:web:6a33e673b5cb404d5627c5",
    measurementId: "G-P1DQM9Y870"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);