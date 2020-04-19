// How the constructor works under the hood (without using classes)
// Define a book constructor which will be in form of a function

function book (title, author){
    // create our empty object literals that will create a book object once they are called 
    this.title = title;
    this.author = author;
    this.status = false;
    // a login method 
    // Instead of having this method inside the constructor we can create a prototype method that 
    // will give access of the method to every single object

    // this.soldOut = function(){
    //     console.log(this.title, 'has been sold out')
    // }
}

// To accomplish this we use the prototype keyword

book.prototype.soldOut = function(){
    console.log(this.title, 'has been sold out')
}

book.prototype.viewDetails = function(){
    console.log('Book Title:', this.title, 'Author:', this.author)
}

// convert the data being passed to an array using the spread operator function
function Addbook (...args){
    // Access the superclass
    // Use the .apply keyword to bind the addbook data to the book constructor 
    // set the data to be equal to this(which is properties of the object) and additionally pass the array of books added 
    book.apply(this, args)
}

// We then access the methods that can be performed by the superclass which is the book
// To borrow the methods we use Object.create() property and specify the source of where we want to emulate the methods from

Addbook.prototype = Object.create(book.prototype)

let book1 = new book('Kidagaa Kimemwozea', 'Ken Walibora')
let newbook = new Addbook('Mstahiki Meya', 'Ken Walibora')

console.log(newbook)