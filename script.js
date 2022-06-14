let myLibrary = [];
const data = document.querySelector('#form').elements;  // HTMLFormElement.elements
const btnSubmit = document.querySelector('#btnSubmit'); 
const bookContainer = document.querySelector('#book-info');
const bookCards = document.querySelectorAll('.book-card');

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
}

btnSubmit.addEventListener('click', () => {
    addBookToLibrary(data);
    displayBooks(Array.from(bookContainer.children));
});

function displayBooks(cardList){
    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.id = `book-${index}`;
        
        // validate if the id already exists in the children of the bookContainer
        try {
            if (!(cardList[index].id === bookCard.id)) throw undefined;
        } catch (e) {
            bookContainer.appendChild(bookCard);
            for(let value in Object.entries(element)){
                let keys = Object.keys(element);
                let bookInfo = document.createElement('p');
                let val = document.createTextNode(`${keys[value]}: ${element[keys[value]]}`);
                bookInfo.appendChild(val);
                bookCard.appendChild(bookInfo);
                bookInfo.className = 'book-info';
            }
        }
    });
}