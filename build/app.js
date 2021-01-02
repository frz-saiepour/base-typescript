"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
var myName = process.env.NAME || 'UNKNOWN';
exports.sayHello = function (name) {
    return "Hello " + name + "!";
};
console.log(exports.sayHello(myName));
