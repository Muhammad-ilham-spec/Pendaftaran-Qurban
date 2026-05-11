  const firebaseConfig = {
    apiKey: "AIzaSyDLwkdIEYLzY-1Lhi1gTAcgFr-G_biHi3c",
    authDomain: "qurban-app-58788.firebaseapp.com",
    databaseURL: "https://qurban-app-58788-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qurban-app-58788",
    storageBucket: "qurban-app-58788.firebasestorage.app",
    messagingSenderId: "789594366772",
    appId: "1:789594366772:web:7c9368cb008c8235d13b61"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

console.log("Firebase Tersambung");