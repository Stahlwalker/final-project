// jQuery.ajaxPrefilter(function (options) {
//     if (options.crossDomain && jQuery.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

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

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});
btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
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

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("email sent");
}).catch(function(error) {
  // An error happened.
});

firebase.auth().languageCode = 'fr';

var database = firebase.database();




// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// need to load jquery node through express to get this to work
// var FFNerd = require('fantasy-football-nerd');
// var ff = new FFNerd({ api_key: "https://www.fantasyfootballnerd.com/service/players/json/5h9gufizmccn/" });
 
// ff.teams(function(teams){
//     console.log('Got teams');
// });
