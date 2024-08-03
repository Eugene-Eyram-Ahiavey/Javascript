const library = [];

let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    available:true
}

let book2 = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    available: false
}

let book3 = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    available: false
}

let book4 = {
    title:"Pride and Prejudice",
    author:"Jane Austen",
    yearPublished: 1813,
    available: true
}


library.push(book1,book2,book3,book4);
console.log(library);

let splicedArray = library.splice(3,1);
console.log(library);

let bookTitles = [book1.title,book2.title,book3.title];
console.log(bookTitles);

let bookIncludes = bookTitles.includes("The Great Gatsby");
console.log(bookIncludes);

library[0].available = false;
console.log(library);

let firstBook = library.shift(book1);
console.log(library);
console.log(firstBook);

const newBook = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    yearPublished: 1951,
    available: true
}

library.unshift(newBook);
console.log(library);

 bookTitles = [book1.title,book2.title,book3.title];
 console.log(bookTitles);

let joinTitles = bookTitles.join(".");

console.log(joinTitles);

const newArrivals = library.slice(1,3);
console.log(library);
console.log(newArrivals);

