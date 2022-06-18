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

function addBookToLibrary (data) {
    myLibrary.push(new Book(data[0].value, data[1].value, data[2].value, data[3].value));
}

btnSubmit.addEventListener('click', () => {
    addBookToLibrary(data);
    clrContainer(bookContainer);
    displayBooks();
});

function displayBooks(){
    myLibrary.forEach((element, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.id = `book-${index}`;
        
        bookContainer.appendChild(bookCard);
        for(let value in Object.entries(element)){
            let keys = Object.keys(element);
            let bookInfo = document.createElement('p');
            let val = document.createTextNode(`${keys[value].replace(/^\w/, (c) => c.toUpperCase())}: ${element[keys[value]]}`);
            bookInfo.appendChild(val);
            bookCard.appendChild(bookInfo);
            bookInfo.className = 'book-info';
        }
        let modSection = document.createElement('div');
        let delIcon = document.createElement('i');
        delIcon.id = `del-book-${index}`;
        delIcon.className = 'fa-solid fa-trash-can';
        let editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen-to-square';
        modSection.appendChild(editIcon);
        modSection.appendChild(delIcon);
        bookCard.appendChild(modSection);
    });
}

function clrContainer(container) {
    console.log(container.children);
    try {
        while(container.firstChild) {
            container.firstChild.remove();
        }
    } catch(e) {

    }
}