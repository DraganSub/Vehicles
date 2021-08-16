import firebase from "firebase/app"
import "firebase/database"

/* firebase configuration  */


const firebaseConfig = {
  apiKey: "AIzaSyCZI7sNohyeljczFImotDDI4CnzBMKr9IE",
  authDomain: "projekt-f9d15.firebaseapp.com",
  databaseURL: "https://projekt-f9d15-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projekt-f9d15",
  storageBucket: "projekt-f9d15.appspot.com",
  messagingSenderId: "113314607257",
  appId: "1:113314607257:web:8beffa290cdaa9eee6c808",
  measurementId: "G-8Q6HZTSHX6"
}

firebase.initializeApp(firebaseConfig)

export default firebase
