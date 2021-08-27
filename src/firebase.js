import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAYGLNFzdkUT3Mku8Q_4OlFWUG7hyoFvKQ",
    authDomain: "disneyplus-clone-2a8de.firebaseapp.com",
    projectId: "disneyplus-clone-2a8de",
    storageBucket: "disneyplus-clone-2a8de.appspot.com",
    messagingSenderId: "842490625767",
    appId: "1:842490625767:web:73765c37fe313dbbc22c42",
    measurementId: "G-7GMDBDJ342"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;