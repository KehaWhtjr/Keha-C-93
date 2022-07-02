var firebaseConfig = {
  apiKey: "AIzaSyDpkP19Rmpa6FhmeW30gcKLL9gjelyKCNE",
  authDomain: "kwitter-app-c0382.firebaseapp.com",
  databaseURL: "https://kwitter-app-c0382-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-c0382",
  storageBucket: "kwitter-app-c0382.appspot.com",
  messagingSenderId: "376923326354",
  appId: "1:376923326354:web:157bad7833f8dacad4e34b",
  measurementId: "G-MN562LWY4P",
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name= localStorage.getItem("user_name");

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}
getData();
