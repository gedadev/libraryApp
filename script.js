let myLibrary = [];
const data = document.querySelector('#form').elements;
const checkbox = document.querySelector('#read');
const btnSubmit = document.querySelector('#btnSubmit'); 
const bookContainer = document.querySelector('#book-info');
const bookCards = document.querySelectorAll('.book-card');
const newBook = document.querySelector('#add-book');
const formContainer = document.querySelector('#form-container');
const btnClose = document.querySelector('#close');

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    static addBookToLibrary (data) {
        let readStatus = "";
        if(checkbox.checked){
            readStatus = "read";
        } else {
            readStatus = "not read yet";
        }
        myLibrary.push(new Book(data[0].value, data[1].value, data[2].value, readStatus));
    }
    static displayBooks(){
        Book.clrContainer(bookContainer);
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
                element.delBook(index);
            });
            let editIcon = document.createElement('i');
            editIcon.className = 'fa-solid fa-book-open';
            if(myLibrary[index].read === 'read') {
                editIcon.classList.add('read');
            }
            editIcon.addEventListener('click', () => {
                element.editReadStatus(editIcon);
            });
            modSection.appendChild(editIcon);
            modSection.appendChild(delIcon);
            bookCard.appendChild(modSection);
        });
    }
    delBook(index) {
        myLibrary.splice(index, 1);
        Book.displayBooks();
    }
    editReadStatus(icon){
        if(this.read === "not read yet"){
            this.read = "read";
            icon.classList.add('read');
        } else if(this.read === "read"){
            this.read = "not read yet";
            icon.classList.remove('read');
        }
        Book.displayBooks();
    }
    static clrContainer(container) {
        try {
            while(container.children[1]) {
                container.children[1].remove();
            }
        } catch(e){}
    }
}

btnSubmit.addEventListener('click', () => {
    Book.addBookToLibrary(data);
    Book.displayBooks();
    formContainer.style.display = "none";
});

newBook.addEventListener('click', () => {
    formContainer.style.display = "flex";
});

btnClose.addEventListener('click', () => {
    formContainer.style.display = "none";
});