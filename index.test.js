
//const index = require('./js/index.js');
//import * as index from './js/index.js';
const index = require('./js/index.js');
//import userCount from './js/index.js';
it('User Count Test 0', () => {
    //Testing basic Method functionality 
    expect(index.getCount()).toBe(0);
});


it('User Count Test 1', () => {
    //Looking at the user count after a user has been created
    index.createUser("a", "b", "c", "d", "e");
    expect(index.getCount()).toBe(1);
});

it('User Count Test 2', () => {
    //Looking at the user count after creating multiple users
    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    expect(index.getCount()).toBe(5);
});

it('Reset Test', () => {
    //Looking at the user count after a user has been created
    index.reset();
    expect(index.getCount()).toBe(0);
});


it('User Test', () => {
    //verifying the contents of a user
    var person = {
        first: "a",
        last : "b",
        dispName : "c",
        pass     : "d",
        mail     : "e",
        id       : "f",
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

    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    index.createUser("a", "b", "c", "d", "e");
    
    for (var i = 0; i < index.getCount(); i++) {
        expect(index.getUsers()[i].fullName()).toEqual(person.fullName());
    }
});

it('Validate Email 0', () => {
    //Invalid email
    //Not used before
    index.reset();
    var email = "hey";
    expect(index.validateEmail(email)).toBeFalsy();
});

it('Validate Email 1', () => {
    //Valid Email
    //Not used before
    index.reset();
    var email = "adamt@vt.edu"
    expect(index.validateEmail(email)).toBeTruthy();
});

it('Validate Email 2', () => {
    //Valid Email 
    //Used before
    index.reset();
    var email = "adamt@vt.edu";
    index.createUser("a", "b", "c", "d", email);
    console.log(index.getUsers[0]);
    expect(index.validateEmail(email)).toBeFalsy();
})

it('Validate Password 0', () => {
    var pass = "1";
    expect(index.validatePassword(pass)).toBeFalsy();
})

it('Validate Password 1', () => {
    var pass = "1234";
    expect(index.validatePassword(pass)).toBeTruthy();
})

it('Validate User 0', () => {
    //bad user and bad pass
    index.reset();
    var user = "a"
    var pass = "0000"
    //Create a user
    index.createUser("adam", "password", "adam", "password", "e");
    expect(index.validateUser(user, pass)).toBeFalsy();
}) 

it('Validate User 1', () => {
    //Good user and bad pass
    var user = "a"
    var pass = "0000" 
    index.createUser("a", "password", "a", "password", "e");
    expect(index.validateUser(user, pass)).toBeFalsy();
})


it('Validate User 2', () => {
    //bad user and good pass
    var user = "a"
    var pass = "0000"
    index.createUser("adam", "0000", "adam", "0000", "e");
    expect(index.validateUser(user, pass)).toBeFalsy();
}) 


it('Validate User 3', () => {
    //Good user and good pass
    var user = "a"
    var pass = "0000"
    index.createUser("a", "0000", "a", "0000", "e");
    expect(index.validateUser(user, pass)).toBeTruthy();
})


