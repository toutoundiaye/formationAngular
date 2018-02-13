/************Les différents types de typescript************/
/**********************************************************/
let message:string = "hello world";
let number1:number = 12;
let reel:number = 12.6;
let isOpen:boolean = true; //false

//Tuple
let httpHeader:[number, string] = [200, 'ok'];
console.log(`Header HTTP: ${httpHeader[0]}:${httpHeader[1]}`);

//Array
let numbers:number[] = [1,2,3,4,5];
let liste:Array<string> = ["Jean", "Albert", "Sophie"]; //déclaration générique
console.log(`Hello ${liste[0]}`);

//Enum
enum Civilite {M, Mme, Melle, Dr, Pr};

let civi:Civilite = Civilite.Pr;

//Any
/*let v:any = 5;
console.log(`v = ${v}`); //true
v = "hello";
console.log(`v = ${v}`); //hello*/


/**********************Les fonctions**************************/
/*************************************************************/

function add(x:number,y:number):number{
    return x+y;
}

function sayHello(name:string = "Joan"):void {
    `Hello ${name}`;
}

let hi = sayHello('lili');
console.log(hi);