// $('.message a').click(function(){
//    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });

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
   var validEmail = false;
   var validPassword = false;
   var firstName;
   if (document.getElementById('firstName')) {
      firstName = document.getElementById('firstName').value;
   }
   var lastName;
   if (document.getElementById('lastName')) {
       lastName = document.getElementById('lastName').value;
   }
   var displayName;
   if (document.getElementById('DisplayName')) {
      var displayName = document.getElementById('DisplayName').value;
   }   
   var email;
   if (document.getElementById('email')) {
      email = document.getElementById('email').value;
      validEmail = validateEmail(email);
   }

   var password;
   if (document.getElementById('passwordC')) {
      passowrd = document.getElementById('passwordC').value;
      validPassword = validatePassword(password);
   }
      
   if (!validEmail || !validPassword || firstName == '' || lastName == '' || displayName == '') {
      if (document.getElementById('alertC')) {
         document.getElementById('alertC').innerHTML = 'Enter a valid informaiton';
      }
   }
   else {
      users[userCount] = createUser(firstName, lastName, displayName, password, email, userCount);
      printUsers();
      window.open("file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html");
     
   }
}

function getCount() {
   return userCount;
}

function setCount(x) {
   userCount = x;
}

function reset() {
   index.setCount(0);    
}

function printUsers() {
   for (i = 0; i < userCount; i++) {
      console.log(users[i].fullName());
      console.log(users[i].dispName);
   }
}

function createUser(firstName, lastName, displayName, password, email, count) {
    var person = {
         first: firstName,
         last : lastName,
         dispName : displayName,
         pass     : password,
         mail     : email,
         id       : count,
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
   userCount++;
   return person;
}

function validateEmail(x) {
   //Make sure it has an @
   var amp = false;
   for (var i = 0; i < x.length; i++) {
      if(x.charAt(i) == "@") {
         amp = true;
      }
   }
    //Make sure it is not a repeat email
    for (i = 0; i < userCount; i++) {
      if (users[i].email == x) {
         return false;
      }
   }
   return amp;
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
 
 module.exports = {
   getCount: getCount,
   setCount : setCount,
   reset : reset,
   users : users,
   login : login,
   create : create,
   getCount : getCount,
   printUsers : printUsers,
   createUser : createUser,
   validateEmail : validateEmail,
   validatePassword : validatePassword,
   validateUser : validateUser
};
