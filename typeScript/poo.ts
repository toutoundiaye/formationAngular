abstract class Humain {

    public age:number;

    public manger(){
        console.log("miam miam");
    }
}

interface Dev{

    language:string;
    devProgram():string;
}

class Person extends Humain implements Dev{

   language:string;

   private _name:string;

    constructor(name: string) {
        super();
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    public hello():string {
        return `Hello my name is ${this.name}`;
    }

    public devProgram():string{
        return `${this.name} developpe un programme en ${this.language}`;
    }
}

class Entreprise{

    public staff:Array<Dev> = [];

    constructor(public name:string){};

    public recruter(esclave:Dev):void {
        if (esclave.language == "Java") {
            this.staff.push(esclave);
            if (esclave instanceof Person)
            console.log(`${esclave.name} a été recruté`);
        }else
        {
            if (esclave instanceof Person){
                console.log(`${esclave.name} n'a pas été recruté, 
                la compétence ${esclave.language} n'est pas nécessaire`);
            }
        }
    }
}

let person =  new Person('John Doe');
person.age = 30;
person.manger();
let hello = person.hello();
console.log(hello);

person.language = "Java";
let program = person.devProgram();
console.log(program);

let ets = new Entreprise("Jehann");
ets.recruter(person);