
// Initialize Firebase
var config = {
    apiKey: "AIzaSyABch8e624hO8-eyPXzM6yiyWoONt_GNLc",
    authDomain: "fantasyfootball-6cbb7.firebaseapp.com",
    databaseURL: "https://fantasyfootball-6cbb7.firebaseio.com",
    projectId: "fantasyfootball-6cbb7",
    storageBucket: "fantasyfootball-6cbb7.appspot.com",
    messagingSenderId: "952687201149"
};
firebase.initializeApp(config);

// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnSignUp = document.getElementById('btnSignUp');
// const btnLogout = document.getElementById('btnLogout');
// btnLogin.addEventListener('click', e => {
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();
//     const promise = auth.signInWithEmailAndPassword(email, pass);
//     promise.catch(e => console.log(e.message));
// });
// btnSignUp.addEventListener('click', e => {
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();
//     const promise = auth.createUserWithEmailAndPassword(email, pass);
//     promise.catch(e => console.log(e.message));
// });
// btnLogout.addEventListener('click', e => {
//     firebase.auth().signOut();
// });
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser);
//         btnLogout.classList.remove('hide');
//     } else {
//         console.log('not logged in');
//         btnLogout.classList.add('hide');
//     }
// });

// var database = firebase.database();


const txtEmail = document.getElementById('txtEmail3');
const txtPassword = document.getElementById('txtPassword3');
const txtEmail2 = document.getElementById('txtEmail5');
const txtPassword2 = document.getElementById('txtPassword5');
// const txtPasswordRepeat = document.getElementById('txtPassword4');
const btnLogin = document.getElementById('btnLogin2');
const btnSignUp = document.getElementById('btnSignUp2');
const btnLogout = document.getElementById('btnLogout');
btnLogin2.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});
btnSignUp2.addEventListener('click', e => {
    const email = txtEmail2.value;
    const pass = txtPassword2.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        btnLogout.classList.add('hide');
    }
});

var database = firebase.database();

//authentication working but it sends out on ever reload need to fix for just sign up

// firebase.auth().onAuthStateChanged(function (firebaseUser) {
//     if (firebaseUser) {
//       firebaseUser.sendEmailVerification().then(function() {
//         // Email sent.
//       }, function(error) {
//         // An error happened.
//       })
        

//     } else {
        
//     }
// });

// $("#btnLogin").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
// });

// $("#btnSignUp").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
// });

$("#btnLogin2").on("click", function (event) {
    $("#txtEmail3").val("");
    $("#txtPassword3").val("");
    $("#id01").hide(); 
});

$("#btnSignUp2").on("click", function (event) {
    $("#txtEmail5").val("");
    $("#txtPassword5").val("");
    // $("#txtPassword4").val("");
    $("#id02").hide();
});

// need to load jquery node through express to get this to work
// var FFNerd = require('fantasy-football-nerd');
// var ff = new FFNerd({ api_key: "https://www.fantasyfootballnerd.com/service/players/json/5h9gufizmccn/" });
 
// ff.teams(function(teams){
//     console.log('Got teams');
// });


  $( document ).ready(function() {
    $("#id01").hide();
});

$('#login2').on("click", function(){
  if ( $("#id01").is(":visible") ) { 
    $("#id01").hide();
  } else if ( $("#id01").is(":hidden") ) { 
    $("#id01").show(); 
  }
});

$( document ).ready(function() {
    $("#id02").hide();
    // $("#id02").hide();
});

$('#signUp2').on("click", function(){
  if ( $("#id02").is(":visible") ) { 
    $("#id02").hide();
  } else if ( $("#id02").is(":hidden") ) { 
    $("#id02").show(); 
  }
});
