let myLibrary = [];
const data = document.querySelector('#form').elements;  // HTMLFormElement.elements
const btnSubmit = document.querySelector('#btnSubmit'); 

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
// console.log(theHobbit.info());

function addBookToLibrary (data) {
    myLibrary.push(new Book(data[0].value, data[1].value, data[2].value, data[3].value));
    console.log(myLibrary);
}

btnSubmit.addEventListener('click', () => {
    addBookToLibrary(data);
});