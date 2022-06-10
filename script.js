let myLibrary = [];
const data = document.querySelector('#form').elements;  // HTMLFormElement.elements
const btnSubmit = document.querySelector('#btnSubmit'); 
const bookContainer = document.querySelector('#book-info');

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
    displayBooks();
}

btnSubmit.addEventListener('click', () => {
    addBookToLibrary(data);
});

function displayBooks (){
    for (let book in myLibrary) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        const titleInfo = document.createTextNode(`Title: ${myLibrary[book].title}`);
        bookCard.appendChild(titleInfo);
        const authorInfo = document.createTextNode(`Author: ${myLibrary[book].author}`);
        bookCard.appendChild(authorInfo);
        const pagesInfo = document.createTextNode(`Pages: ${myLibrary[book].pages}`);
        bookCard.appendChild(pagesInfo);
        const readInfo = document.createTextNode(`Read?: ${myLibrary[book].read}`);
        bookCard.appendChild(readInfo);
        bookContainer.appendChild(bookCard);
    }
}