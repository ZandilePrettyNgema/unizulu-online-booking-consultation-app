// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCE21XhsfB6AiJQXop1m9JAeI5IofYXb64",
  authDomain: "webapp-4a3aa.firebaseapp.com",
  projectId: "webapp-4a3aa",
  storageBucket: "webapp-4a3aa.appspot.com",
  messagingSenderId: "48825503496",
  appId: "1:48825503496:web:b37ded0c4f7d77687126bd",
  measurementId: "G-6S7BF2TBKT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// SignOut
function signOut() {
  auth.signOut();
  window.location.href = "signin.html";
}
