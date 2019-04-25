$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

var el1 = document.getElementById("login");
if (el1) {
   el1.addEventListener("click", login);
}
var el2 = document.getElementById("create");
if (el2) {
   el2.addEventListener("click", create);
}

var userCount = 0;
var users = Array(5);

function login(form) {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if (username == '' || password == '' || !validateUser(username, password)) {
         document.getElementById('alert').innerHTML = 'Enter a valid Username and Password';
      }      
      else {
         window.open("file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html");
      }
}

function create(form) {
   var firstName = document.getElementById('firstName').value;
   var lastName = document.getElementById('lastName').value;
   var displayName = document.getElementById('DisplayName').value;
   var email = document.getElementById('email').value;
   var password = document.getElementById('passwordC').value;
   if (!validateEmail(email) || !validatePassword(password) || firstName == '' || lastName == '' || displayName == '') {
      document.getElementById('alertC').innerHTML = 'Enter a valid informaiton';
   }
   else {
      var person = {
         first: firstName,
         last : lastName,
         dispName : displayName,
         pass     : password,
         mail     : email,
         id       : userCount,
         fullName : function() {
           return this.first + " " + this.last;
         },
         getid : function() {
            return this.id;
         },
         getMail : function() {
            return this.mail;
         },
         getDisp : function() {
            return this.dispName;
         }
       };
      users[userCount] = person;
      userCount++;
      printUsers();
      window.open("file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html");
     
   }
}

function getCount() {
   return userCount;
}

function printUsers() {
   for (i = 0; i < userCount; i++) {
      console.log(users[i].fullName());
      console.log(users[i].dispName);
   }
}

function validateEmail(x) {
   for (var i = 0; i < x.length; i++) {
      if(x.charAt(i) == "@") {
         return true;
      }
    }
    return false;
}

function validatePassword(x) {
   return x.length >= 4
}

function validateUser(x, y) {
   console.log(userCount);
   for (i = 0; i < userCount; i++) {
      if (users[i].dispName == x && users[i].pass == y) {
         console.log("Valid user")
         return true;
      }
   }
   return false;   
}

 var el3 = document.getElementById("info");
 if (el3) {
    el3.innerHTML = "";
 }
 
 
