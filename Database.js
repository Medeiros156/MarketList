// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqP2vU3HU_OEo5BVwQ9xuzlEYofw3b4VQ",
  authDomain: "database-360d3.firebaseapp.com",
  projectId: "database-360d3",
  storageBucket: "database-360d3.appspot.com",
  messagingSenderId: "438930706421",
  appId: "1:438930706421:web:e9381b55d316e46d6edabc",
  measurementId: "G-T1YMCS6FHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var list = localStorage.getItem(List);



import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  get,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

function insertData(e, i) {
  set(ref(db, "Item - " + i), {
    text: e,
  })
    .then(() => {
      console.log("Data Stored");
    })
    .catch((error) => {
      alert("unsuccesful, error" + error);
    });
}

export function insertDataFromList() {
  let ls = JSON.parse(localStorage.getItem("List"));
  ls.forEach(function callback(e, i) {
    insertData(e, i);
  });
}


function selectData() {
  const dbref = ref(db);

  console.log(dbref);
  console.log("snapshot");
  get(child(dbref, "Item - " + 6))
    .then((snapshot) => {
      console.log(snapshot);
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("Not Found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function updateData() {
    update(ref(db, "Item - " + i), {
        Text: e,
    })
    .then(() => {
        console.log("Data Updated");
    })
    .catch((error) => {
        alert("unsuccesful, error" + error);
    });
}

export function deleteData(i) {
    remove(ref(db, "Item - " + i))
    .then(() => {
        console.log("Data Removed"); 
    })
    .catch((error) => {
        alert("unsuccesful, error" + error);
    });
}
export function deleteAllData() {
    let ls = localStorage.getItem("List");
    let lenght = JSON.parse(ls).length;
    for (let i = 0; i < lenght; i++) {
        deleteData(i)
    }
    setTimeout(localStorage.setItem("List",""), 1000) 
    let box = document.getElementById("List")
    box.innerHTML = ''
   
}

