/************Les différents types de typescript************/
/**********************************************************/
let message = "hello world";
let number1 = 12;
let reel = 12.6;
let isOpen = true; //false
//Tuple
let httpHeader = [200, 'ok'];
console.log(`Header HTTP: ${httpHeader[0]}:${httpHeader[1]}`);
//Array
let numbers = [1, 2, 3, 4, 5];
let liste = ["Jean", "Albert", "Sophie"]; //déclaration générique
console.log(`Hello ${liste[0]}`);
//Enum
var Civilite;
(function (Civilite) {
    Civilite[Civilite["M"] = 0] = "M";
    Civilite[Civilite["Mme"] = 1] = "Mme";
    Civilite[Civilite["Melle"] = 2] = "Melle";
    Civilite[Civilite["Dr"] = 3] = "Dr";
    Civilite[Civilite["Pr"] = 4] = "Pr";
})(Civilite || (Civilite = {}));
;
let civi = Civilite.Pr;
//Any
/*let v:any = 5;
console.log(`v = ${v}`); //true
v = "hello";
console.log(`v = ${v}`); //hello*/
/**********************Les fonctions**************************/
/*************************************************************/
function add(x, y) {
    return x + y;
}
function sayHello(name = "Joan") {
    `Hello ${name}`;
}
let hi = sayHello('lili');
console.log(hi);
