jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});



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

// var uid;

// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const txtPassword2 = document.getElementById('txtPassword2');
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
//     const pass2 = txtPassword2.value;
//     const auth = firebase.auth();
//     const promise = auth.createUserWithEmailAndPassword(email, pass, pass2);
//     promise.catch(e => console.log(e.message));
// });
// btnLogout.addEventListener('click', e => {
//     // var uid = "";
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

// $("#btnLogin").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
// });
// $("#btnSignUp").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
//     $("#txtPassword2").val("");
// });
// Create a variable to reference the database.
// var database = firebase.database();
// Whenever a user clicks the click `


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
// $("#btnLogin").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
// });
// $("#btnSignUp").on("click", function (event) {
//     $("#txtEmail").val("");
//     $("#txtPassword").val("");
// });
// Create a variable to reference the database.


var database = firebase.database();




// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser.uid);
//         console.log(firebaseUser);
//         uid = firebaseUser.uid;
//         btnLogout.classList.remove('hide');
//         database.ref('users/' + uid).off("child_added");

//         $("#beer-table2 > tbody").empty();
//         database.ref('users/' + uid).on("child_added", function (childSnapshot) {


//             $("#beer-table2 > tbody").append("<tr><td>" + childSnapshot.val().beerName + "</td><td>" +
//                 childSnapshot.val().location + "</td><td>" + childSnapshot.val().thoughts + "</td></tr>");

//         });

//     } else {
//         console.log('not logged in');
//         uid = "";
//         database.ref('public/' + uid).off("child_added");
//         $("#beer-table2 > tbody").empty();

//         database.ref('public/').on("child_added", function (childSnapshot) {
//             // Log everything that's coming out of snapshot
//             console.log(childSnapshot.val());

//             $("#beer-table2 > tbody").append("<tr><td>" + childSnapshot.val().beerName + "</td><td>" +
//                 childSnapshot.val().location + "</td><td>" + childSnapshot.val().thoughts + "</td></tr>");
//         }, function (errorObject) {});
//         $("#add-beer").on("click", function (event) {
//             $("#beer-name").val("");
//             $("#location").val("");
//             $("#your-thoughts").val("");
//         });
//         btnLogout.classList.add('hide');
//     }
// });

// $("#add-beer").on("click", function (event) {
//     event.preventDefault();
//     // Get the input values
//     var beerName = $("#beer-name").val().trim();
//     var location = $("#location").val().trim();
//     var thoughts = $("#your-thoughts").val().trim();

//     if (uid !== "") {
//         database.ref('users/' + uid).push({
//             beerName: beerName,
//             location: location,
//             thoughts: thoughts,
//         });
//     } else if (uid === "") {
//         database.ref('public/' + uid).push({
//             beerName: beerName,
//             location: location,
//             thoughts: thoughts,
//         });

//     }
// });


// $("#add-beer").on("click", function (event) {
//     $("#beer-name").val("");
//     $("#location").val("");
//     $("#your-thoughts").val("");
// });





// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var modal = document.getElementById('id02');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


//  // Get the modal
//  var modal = document.getElementById('signUp1');

//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//      if (event.target == modal) {
//          modal.style.display = "none";
//      }
//  }


// typed.js
// var typed = new Typed('.type', {
//     strings: ["Pick 2",
//       "Sit em",
//       "Start em",
//       "Compare em"],
//     typeSpeed : 75,
//       backDelay : 1500,
//       smartBackspace : false,
//       loop : true,
//       showCursor : false,
//       backSpeed : 60

//   });


// This .on("click") function will trigger the AJAX Call
$("#find-player").on("click", function (event) {

    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();

    // Here we grab the text from the input box
    var player = $("#player-input").val();

    // api

    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // var queryURL = "https://www.fantasyfootballnerd.com/service/" + player + "players/json/5h9gufizmccn/";
    // var queryURL = "https://www.fantasyfootballnerd.com/service/?t=" + player + "&players/json/5h9gufizmccn/";

    var queryURL = "https://www.fantasyfootballnerd.com/service/players/json/5h9gufizmccn/";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        $("#player-view").text(JSON.stringify(response));
        console.log(queryURL);
        console.log(response);
    });

});


//   all players

//   https://www.fantasyfootballnerd.com/service/players/xml/5h9gufizmccn/
