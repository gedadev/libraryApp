let myLibrary = [];
const data = document.querySelector('#form').elements;
const checkbox = document.querySelector('#read');
const btnSubmit = document.querySelector('#btnSubmit'); 
const bookContainer = document.querySelector('#book-info');
const bookCards = document.querySelectorAll('.book-card');
const newBook = document.querySelector('#add-book');
const formContainer = document.querySelector('#form-container');

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
    let readStatus = "";
    if(checkbox.checked){
        readStatus = "read";
    } else {
        readStatus = "not read yet";
    }
    myLibrary.push(new Book(data[0].value, data[1].value, data[2].value, readStatus));
}

btnSubmit.addEventListener('click', () => {
    addBookToLibrary(data);
    displayBooks();
    formContainer.style.display = "none";
});

function displayBooks(){
    clrContainer(bookContainer);
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
        delIcon.className = 'fa-solid fa-trash-can';
        delIcon.addEventListener('click', () => {
            delBook(index);
        });
        let editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-book-open';
        if(myLibrary[index].read === 'read') {
            editIcon.classList.add('read');
        }
        editIcon.addEventListener('click', () => {
            editReadStatus(index, editIcon);
        });
        modSection.appendChild(editIcon);
        modSection.appendChild(delIcon);
        bookCard.appendChild(modSection);
    });
}

function delBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function editReadStatus(index, icon){
    if(myLibrary[index].read === "not read yet"){
        myLibrary[index].read = "read";
        icon.classList.add('read');
    } else if(myLibrary[index].read === "read"){
        myLibrary[index].read = "not read yet";
        icon.classList.remove('read');
    }
    displayBooks();
}

function clrContainer(container) {
    try {
        while(container.children[1]) {
            container.children[1].remove();
        }
    } catch(e){}
}

newBook.addEventListener('click', () => {
    formContainer.style.display = "flex";
});
