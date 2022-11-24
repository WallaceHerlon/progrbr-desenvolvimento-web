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

const TURMA = "turmaA"

let db = firebase.firestore();

db.collection(TURMA).add({
    nome: "Paulo",
    sobrenome: "Silva",
    nota: { nota1: 9.0, nota2: 4.9},
}).then((doc) => {
    console.log("Documento inserido com sucesso:", doc);
}).catch(err => {
    console.log(err);
})