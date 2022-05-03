let myLibrary = [];
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
//console.log(theHobbit.info());

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
// });

form.addEventListener('submit', (e) => {
    const data = Object.fromEntries(new FormData(e.target).entries());
    addBookToLibrary(data);
});

function addBookToLibrary (data) {
    myLibrary.push(new Book(data.title, data.author, data.pages, data.read));
    console.log(myLibrary);
}