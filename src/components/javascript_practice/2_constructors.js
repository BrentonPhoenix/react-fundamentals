/*============================================

//we name the class
class User {
    //we call the constructor function and create parameters
    //these will be values that we want to be passed in and stored in the object
    constructor(first,last,e){
        //on the right side of the below expresions, the word 'first' , 'last', and 'e' are the calues that are tetting passed in this as arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e
        //on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as the value for 'this' specific object being created
    }
}

let userOne = new User("Paul","O'Connor", "poconnor@elevenfifty.org")
console.log("test 1: ", userOne.fisrt) //undefined
console.log("test two: ", userOne.f) //Paul
console.log("test three: ", userOne.l) //O'Connor
console.log("test four: ", userOne) //User {f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org'}


================================================*/

class Player {
    constructor(name,rank,points){
        this.name = name;
        this.rank = rank;
        this.points = points
    }

    announce(){
        console.log(`${this.name} has ${this.points} which puts them at rank ${this.rank}!`)
    }
    add(points){
        console.log(`${this.name} just recieved ${points}, so now they have ${this.points + points}`)
    }
}

let billNie = new Player("Bill Nie", 2, 1000)

billNie.add(200)