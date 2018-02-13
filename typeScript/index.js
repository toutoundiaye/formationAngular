/************Les différents types de typescript************/
/**********************************************************/
var message = "hello world";
var number1 = 12;
var reel = 12.6;
var isOpen = true; //false
//Tuple
var httpHeader = [200, 'ok'];
console.log("Header HTTP: " + httpHeader[0] + ":" + httpHeader[1]);
//Array
var numbers = [1, 2, 3, 4, 5];
var liste = ["Jean", "Albert", "Sophie"]; //déclaration générique
console.log("Hello " + liste[0]);
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
var civi = Civilite.Pr;
//Any
var v = 5;
console.log("v = " + v); //true
v = "hello";
console.log("v = " + v); //hello
