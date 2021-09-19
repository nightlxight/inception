var fs = require('fs');

var my = new Object();
var girlfriends = new Object();

function getMy() {
    my.name = "your name here";
    my.lastname = "your last name here";
    my.age = "your age here";
};

function getGirlfriend() {
    getMy();
    girlfriends.name = "your girlfriends name here";
    girlfriends.lastname = "your girlfriends last name here";
    girlfriends.age = "your girlfriends age here";
};

function logGirlfriend() {
    getGirlfriend();
    console.log(`Your girlfriends name: ${girlfriends.name}` + " " + `${girlfriends.lastname}`.toUpperCase());
    console.log(`Your girlfriends age: ${girlfriends.age}`);
};

function logMy() {
    getMy();
    console.log(`Your name: ${my.name}` + " " + `${my.lastname}`.toUpperCase());
    console.log(`Your age: ${my.age}`);
};

module.exports = {my, girlfriends, getMy, getGirlfriend, logGirlfriend, logMy};