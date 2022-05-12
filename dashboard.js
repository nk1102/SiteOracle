
var  firebaseConfig = {
    apiKey: "AIzaSyD804xBhcN5swK-Buq13q2V_OK4c2optQ4",
    authDomain: "site-oracle.firebaseapp.com",
    projectId: "site-oracle",
    storageBucket: "site-oracle.appspot.com",
    messagingSenderId: "968371403424",
    appId: "1:968371403424:web:6a33e673b5cb404d5627c5",
    measurementId: "G-P1DQM9Y870"
  };
  

firebase.initializeApp(firebaseConfig);


function functionon(){
    document.getElementById('chatbot').style.display = "block";
    document.getElementById('analytics').style.display = "none";
    document.getElementById("anchor1").className = "active";
    document.getElementById("ana").className = "";
 
    
 

}

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        const dbRef = firebase.database().ref();
dbRef.child("Users/" + user.uid ).get().then((snapshot) => {
  if (snapshot.exists()) {

    var childData = snapshot.val().Name;
    var childData1 = snapshot.val().TotalIncome;
    var childData2 = snapshot.val().TotalSpent;
    var childData3 = childData1- childData2;
   

    // console.log(moneyadded)
    document.getElementById('name').innerHTML = childData;
    // document.getElementById('totalincome1').innerHTML = childData1;
    // document.getElementById('totalincome2').innerHTML = childData1;
    // document.getElementById('spentIncome1').innerHTML = childData2;
    // document.getElementById('savedIncome1').innerHTML = childData3;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

        

    } else {
      // User is signed out
      // ...
    }
  });
function incomesubmit(event){
    event.preventDefault()
    var userincome = document.getElementById('input1').value
    const dbRef = firebase.database().ref();
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          
        }
    
    dbRef.child("Users/" + user.uid ).get().then((snapshot) => {
      if (snapshot.exists()) {
        var income = snapshot.val().TotalIncome;
     
        var update = {
            TotalIncome : userincome
        }
        firebase.database().ref("Users/" + user.uid).update(update)
          alert('Total Income entered Successfully')
          document.getElementById("incomesubmitform").reset();
         var element= document.getElementById('totalincome1').innerHTML = income;
      }

     
      
      else {
        console.log("No data available");
      }

     
          
      
      
      
    }).catch((error) => {
      console.error(error);
    });
});
   
  
}


function moneyspent(event){
  event.preventDefault()
  // console.log('error')
  
  const dbRef = firebase.database().ref();

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      // console.log(user)

    }
      var userspent = document.getElementById('input2').value

      firebase.database().ref("Users/" + user.uid).get().then((snapshot) =>{
        if(snapshot.exists()){
          
          // console.log(userspent)
  
           var update = {
            TotalSpent : userspent
          }
          firebase.database().ref("Users/" + user.uid).update(update)
          alert('spent money has been entered successfully')
          document.getElementById("spentsubmitform").reset();
         
        }
     
      })
      

   
     
    
  
  })

}

//  logout function 
function logout(){
    firebase.auth().signOut().then(function() {
        alert("Logout Successfull")
        location.replace("login.html")
      }, function(error) {
        console.log(error)
      });
      
}
function chatbotfunction(){
//   alert('this section will be updated later')
  document.getElementById('analytics').style.display = "none";
  document.getElementById('analytics1').style.display = "block";

}
function developers(){
  //   alert('this section will be updated later')
    document.getElementById('analytics').style.display = "none";
    document.getElementById('analytics1').style.display = "none";
    document.getElementById('developers').style.display="block";
  
  }