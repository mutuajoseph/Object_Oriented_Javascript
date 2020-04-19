// Classes  - Refers to a blueprint of a object 
// It does curb the effect of handling more than one object when needed
// To create class we do use the class keyword 

class User {
    // We use constructors to create empty records which a set to newly created objects
    // Inside the contructor function we pass parameters which will refers to the objects when being created
    constructor(name, email){
        // we then use this property to access the objects and set them to the parameters passed in the constructor
        this.name  = name;
        this.email = email;
        this.score = 0;
    }
    // We can also have methods that will perform certain functions for our class
    // They are written inside the class of our object and outside the costructor fucntion


    // METHOD CHAINING 
    // Refers to a way of accessing more than one method in an object cocurrently while using the class 
    // To accomplish this we use the return property (return this) and we return the current instance being accessed by the object 

    login(){
        console.log(this.email, 'has logged in');
        return this
    }
    logout(){
        console.log(this.email, 'has logged out');
        return this
    }
    updateScore(){
        this.score +=1
        console.log(this.email, 'score is now', this.score);
        return this
    }
}

// CLASS INHERITANCE
// Refers to a class borrowing all the properties and methods present in an existing class
// A subclass borrowing from a superclass 
// To accomplish this we do use the (extends) keyword

// lets create a Admin class that will have the right of deleting a user 

class Admin extends User {
    deleteUser(user){

        // delete the user using the filter property in a conditional statement
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

// Add objects using our class User
// To add an object to our class we use the new property which does the following:
    // Creates an empty object 
    // Sets the value of 'this' to be te new empty object
    // Calls the constructor method

let userOne = new User('Joseph Wambua', 'mutuajoseph17@gmail.com');
let userTwo = new User('Brian Kivuti', 'briankivuti1@gmail.com');

console.log(userOne);
console.log(userTwo);

userOne.updateScore()
userOne.login()
userTwo.logout()

userOne.login().updateScore().updateScore().logout()

// Store the users in an array so as to access all of tem centrally
users = [userOne,userTwo]

// create an Admin 
let adminOne = new Admin('Edwin Kailikia' ,'edwinkailikia@gmail.com')

console.log(adminOne)

// Delete a user 
adminOne.deleteUser(userOne)

console.log(users)