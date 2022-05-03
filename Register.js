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


function register(event){

    document.getElementById('loadingscreen').style.display = "block";
     event.preventDefault()
     name = document.getElementById('name').value
     email = document.getElementById('email').value
     password = document.getElementById('password').value
     firebase.auth().createUserWithEmailAndPassword(email, password)
     
   .then((userCredential) => { 
     var user1 = userCredential.user;
     console.log(user1)
     document.getElementById('loadingscreen').style.display = "none";
     console.log('Account created successfully')
     alert('Account created Successfully')
     document.getElementById("registerform").reset();
     
     firebase.database().ref('Users/' + user1.uid).set({
       UserId: user1.uid,
       Name : name,
        Email: email
        
   
     })
    
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     alert(errorMessage)
   
   });
   
 
   
   }
 