// encapsulation
// class Person{
//     public name:string = "hifza"
//     protected _salary:number = 100000
//     getName(){
//         console.log(this.name)
//     }
// }
// class Human extends Person{
//     hello(){
//         this._salary
//     }
// }
// let p = new Person();
// let h = new Human();
// console.log(h.);
// class Person{
//     protected _name = "hif"
//     getName(){
//         this._name
//     }
// }
// class Human extends Person{
//     hello(){
//         this._name
//     }
// }
// let p = new Person()
// console.log(p.getName);
// hum by default hum koshish krty hn ke is ko private rakhy, property hum jb bhi bana tay hn 
// geter or seter methode hn humare pass, 
// geter jb hum bana ty hn tw likhtay hn get , get ka method hum ko retuen kr rta hia, same name se bane
// method ko call ( ) pranthies ke zarya call krty hn
// set ke methode mein return kuch nhi hota 
// class Person{
//     private _name = "hif"
//     private _salary = "1000000"
//     get salary(){
//         // let isallowed = false
//         let isallowed = true
//         if(isallowed) return this._salary
//         return "your not Allowed"
//     }
//     set salary(val){
//         this._name = val
//     }
//     updateName(nam:string){
//         this._salary = nam
//     }
// }
// let p = new Person()
// console.log(p.salary)
// p.salary = "hifza"           // agr value assign ki tw set chly ga or agr nhi kry gay tw get chaly ga, ya dono hoty tw methode hi hn 
// p.updateName("hiba")
// console.log(p.salary)
//  interface Hello{
//     age:number
//     email?:string
//  }
// abstract class Person{
//     name = "hifza";
// }
// // let p = new Person()
// class Human implements Person,Hello{
//     name = "hif"
//     age = 20
// }
// let h = new Human()
// poly
// class Player{
//     game(){
//         console.log("football")
//     }
// }
// class Game extends Player{
//     game(){
//         console.log("basketball")
//     }
// }
// let g = new Game()
// g.game()
// class Animal{
//     sound(){
//         console.log("some sound")
//     }
// }
// class Cat extends Animal{
//     sound(): void {
//         console.log("meeeeoow")
//     }
// }
// class Cow extends Animal{
//     sound():void{
//         console.log("Muuuuuuu....")
//     }
// }
// structural typing in opps
// let a = {name:"hif"}
// let b = {name:"hifza", age:23}
// a = b
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = "tommy";
    }
    Dog.prototype.sound = function () {
        console.log("some sound");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Jasper";
        this.age = 1;
    }
    Cat.prototype.sound = function () {
        console.log("meeeeoow");
    };
    return Cat;
}());
var d = new Dog();
var c = new Cat();
d = c; // ya stale object ban gaya  no error 
// c = d
d = new Cat();
console.log(d);
console.log(c);
