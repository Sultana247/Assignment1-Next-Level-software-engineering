### Access modifier in TypeScript oop
Access modifier in TypeScript controls class properties and methods. There are four comonly used modifier in TypeScript. These are: public, private, protected and readonly.

1. Public: This is the default access modifier. If there is no access modifier mentioned before any properties or method it is considered as public. Public properties and method can be accessed both from inside and outside the class.

2. Private: This is a strict access modifier. Private properties or methods can be only accessed within the same class. They can not be accessed from outside the class or inside any of its subclasses.

3. Protected: Protected class almost same as private. But it can be accessed within the same class and its sub or child classes. And can not be accessed from outside the class.

4. Readonly: Readonly access modifier can not be accessed after declaration, it can be read. It can not be modified or changed. Readonly access modifier is defined during declaration or within the constructor.

For Example,

class Person{
    constructor(public name: string, private id: number, protected hobby: string, readonly country: string){
        this.country = "Bangladesh"
    }
    getId(){
        return this.id; //  accessed only inside the class
    }
}

const student = new Person("Sultana", 25, "Gardening");

console.log(student.name)//accessed outside the class
console.log(student.getId())//protected 
console.log(student.country)//can be read only