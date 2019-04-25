
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
    index.createUser("a", "b", "c", "d", "e", "f");
    expect(index.getCount()).toBe(1);
});

it('User Count Test 2', () => {
    //Looking at the user count after creating multiple users
    index.createUser("a", "b", "c", "d", "e", "f");
    index.createUser("a", "b", "c", "d", "e", "f");
    index.createUser("a", "b", "c", "d", "e", "f");
    index.createUser("a", "b", "c", "d", "e", "f");
    expect(index.getCount()).toBe(5);
});


