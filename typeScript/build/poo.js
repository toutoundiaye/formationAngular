class Humain {
    manger() {
        console.log("miam miam");
    }
}
class Person extends Humain {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    hello() {
        return `Hello my name is ${this.name}`;
    }
    devProgram() {
        return `${this.name} developpe un programme en ${this.language}`;
    }
}
class Entreprise {
    constructor(name) {
        this.name = name;
        this.staff = [];
    }
    ;
    recruter(esclave) {
        if (esclave.language == "Java") {
            this.staff.push(esclave);
            if (esclave instanceof Person)
                console.log(`${esclave.name} a été recruté`);
        }
        else {
            if (esclave instanceof Person) {
                console.log(`${esclave.name} n'a pas été recruté, 
                la compétence ${esclave.language} n'est pas nécessaire`);
            }
        }
    }
}
let person = new Person('John Doe');
person.age = 30;
person.manger();
let hello = person.hello();
console.log(hello);
person.language = "Java";
let program = person.devProgram();
console.log(program);
let ets = new Entreprise("Jehann");
ets.recruter(person);
