/* ========================= */
/* FIREBASE IMPORTS */
/* ========================= */

import {
initializeApp
}
from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
}
from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
getDatabase,
ref,
set,
onValue,
push,
remove,
update
}
from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";


/* ========================= */
/* YOUR REAL FIREBASE CONFIG */
/* ========================= */

const firebaseConfig = {

apiKey:
"AIzaSyADRsDe3dRluSTXBJ6WkJGoyyiLPdNqPto",

authDomain:
"hospitalappointmentapp-c8985.firebaseapp.com",

databaseURL:
"https://hospitalappointmentapp-c8985-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId:
"hospitalappointmentapp-c8985",

storageBucket:
"hospitalappointmentapp-c8985.firebasestorage.app",

messagingSenderId:
"270471728568",

appId:
"1:270471728568:web:fb1397d9782f9d77bcd34d",

measurementId:
"G-P6G7YPHWEN"

};


/* ========================= */
/* INITIALIZE FIREBASE */
/* ========================= */

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getDatabase(app);


/* ========================= */
/* MAKE GLOBAL VARIABLES */
/* ========================= */

window.auth = auth;
window.db = db;

window.ref = ref;
window.set = set;
window.update = update;
window.onValue = onValue;
window.push = push;
window.remove = remove;


/* ========================= */
/* LOGIN FUNCTION */
/* ========================= */

window.loginEmail =
function (email, password) {

return signInWithEmailAndPassword(
auth,
email,
password
);

};


/* ========================= */
/* SIGNUP FUNCTION */
/* ========================= */

window.signupEmail =
function (email, password) {

return createUserWithEmailAndPassword(
auth,
email,
password
);

};


/* ========================= */
/* CHECK USER SESSION */
/* ========================= */

window.checkUser =
function (callback) {

onAuthStateChanged(
auth,
callback
);

};


/* ========================= */
/* LOGOUT FUNCTION */
/* ========================= */

window.logout =
function () {

return signOut(auth);

};