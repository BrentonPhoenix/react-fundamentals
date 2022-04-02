//ES6 JS CLASSES
class User {
    constructor(name) {
        this.name = name;
        this.type = 'trial user';
    };
    //Method 1
    greet(){
        console.log(`Welcome back, ${this.name}.`);
    };
    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
}

class TrialUser extends User {
    trialEnding(){
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`)
    };
};

//Instance of User class
let anonDude = new User('Anonymous')
anonDude.greet();
anonDude.status()

//Instance of TrialUser class
let trialUser = new TrialUser('Paul')
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User{
    banned(infraction){
        console.log(`${this.name}, ${infraction}. Your account has been banned.`)
    }
}

let bUser = new BannedUser('Sam')

bUser.banned('you have violated our terms of service')
