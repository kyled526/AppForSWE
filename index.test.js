
//const index = require('./js/index.js');
//import * as index from './js/index.js';
const index = require('./js/index.js');
//import userCount from './js/index.js';
it('User Count Test', () => {
    //feed.like(this);
    //index.test("something");
    //test('file:/Users/Adam/Documents/GitHub/AppForSWE/feedLogin.html');
    expect(index.getCount()).toBe(1);
});