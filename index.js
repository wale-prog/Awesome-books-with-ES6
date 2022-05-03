import Books from './modules/Books.js';
import pageNav from './modules/page_nav.js';
import manageDate from './modules/dateNow.js';
import createNewBook from './modules/createNewUI.js';

const library = new Books(JSON.parse(localStorage.getItem('books')));
window.addEventListener('DOMContentLoaded', () => {
  const awesomeBooks = document.getElementById('awesome-books');
  const booksContainer = document.querySelector('.new-books');
  const titleInput = document.querySelector('.title-input');
  const authorInput = document.querySelector('.author-input');

  const displayBooks = (books) => {
    booksContainer.innerHTML = '';
    books.forEach(createNewBook);
    localStorage.setItem('books', JSON.stringify(books));
  };
  const booksListAction = (event) => {
    const eventId = event.target.id;
    if (eventId.includes('remove')) {
      const bookTitle = eventId.replace('remove', '');
      library.remove(bookTitle);
      displayBooks(library.getAll());
    }
  };
  awesomeBooks.onsubmit = (event) => {
    event.preventDefault();
    library.add(titleInput.value, authorInput.value);
    displayBooks(library.getAll());
    titleInput.value = '';
    authorInput.value = '';
  };
  document.getElementById('top-books').addEventListener('click', booksListAction);
  displayBooks(library.getAll());
});

pageNav();
manageDate();
