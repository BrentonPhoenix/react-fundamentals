class User {
    constructor(name){
        this.name = name;
        this.type = 'Trial User'
    };
    //Method 1
    greet(){
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2
    status(){
        console.log(`Current status: ${this.type}`)
    }
}

//Instance of the class/new object
let anonDude = new User('Anonymous dude')

//we can now use the new instance of the . operator to access the two methods

anonDude.greet()
anonDude.status()


//ANOTHER INSTANCE OF THE CLASS 
let anonLady = new User('Anonymous Lady')
anonLady.greet()
anonLady.status()

//ANOTHER INSTANCE OF THE CLASS 
let jeff = new User('Jeff')
jeff.greet()
jeff.status()

let anne = new User('Anne')
anne.greet()
anne.status()

let heather = new User('Heather')
heather.greet()
heather.status()
