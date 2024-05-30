var ibm;
(function (ibm) {
    ibm.addNums = function (a, b) { console.log(a + b); };
    ibm.subNums = function (a, b) { console.log(a - b); };
    // addNums(20,10);
    // subNums(20,10);
})(ibm || (ibm = {}));
// Ibm.addNums(5, 2);
// Ibm.subNums(2, 5);
///<reference path="06-ts-namespaces.ts"/>
var ibm;
(function (ibm) {
    ibm.mulNums = function (a, b) { console.log(a * b); };
    ibm.divNums = function (a, b) { console.log(a / b); };
    ibm.mulNums(20, 10);
    ibm.divNums(20, 10);
})(ibm || (ibm = {}));
///<reference path="06-ts-namespaces.ts"/>
///<reference path="06-ts-namespaces-2.ts"/>
ibm.addNums(5, 2);
ibm.subNums(5, 2);
ibm.mulNums(5, 2);
ibm.divNums(5, 2);
