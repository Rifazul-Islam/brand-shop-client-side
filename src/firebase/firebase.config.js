// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOU3lTHMlnOI_wBwWRUOpSTwPSBN-YXH8",
  authDomain: "automotive-client-side.firebaseapp.com",
  projectId: "automotive-client-side",
  storageBucket: "automotive-client-side.appspot.com",
  messagingSenderId: "388550154984",
  appId: "1:388550154984:web:edb598e73a7b642873c75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export default auth ;