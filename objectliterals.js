// Creating objects in js using object literals
let user = {
    // Properties of the object (user)
    name: 'Joseph Wambua Mutua',
    email: 'mutuajoseph17@gmail.com',

    // the user can perform some methods in form of functions
    login(){
        console.log(this.name, 'has logged in')
    },

    logout(){
        console.log(this.name, 'has logged out')
    }
}

// console.log(user.login())