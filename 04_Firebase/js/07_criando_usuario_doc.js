// Initialize Firebase
const config = {
  apiKey: "AIzaSyCJDH92u2WtvaQ9xZk3IV43uDgImBzhBjA",
  authDomain: "colegio-4df79.firebaseapp.com",
  projectId: "colegio-4df79",
  storageBucket: "colegio-4df79.appspot.com",
  messagingSenderId: "156788156548",
  appId: "1:156788156548:web:31681b0205a6586e6b7ad1"
};

firebase.initializeApp(config);

let db = firebase.firestore();

let newUserEmail = "novoemail@teste.com";
let newUserPassword = "123abc"

let auth = firebase.auth();

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user => {
        console.log(user);    
    }).catch(error => {
        console.log(error);
    })

