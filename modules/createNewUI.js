const createNewBook = ({ title, author }) => {
  const booksContainer = document.querySelector('.new-books');
  const newBooksDiv = document.createElement('div');
  const newBookTitle = document.createElement('p');
  const newBookAuthor = document.createElement('p');
  const button = document.createElement('button');
  const titleNoSpace = title.replace(/\s+/g, '');
  const removeId = `remove${titleNoSpace}`;
  const divId = `div${titleNoSpace}`;
  newBooksDiv.setAttribute('id', divId);
  button.innerText = 'Remove';
  button.className = 'remove-btn';
  button.setAttribute('id', removeId);
  newBookTitle.innerText = `${title} by ${author}`;
  newBookAuthor.innerText = author;
  newBooksDiv.append(newBookTitle, button);
  booksContainer.append(newBooksDiv);
};

export default createNewBook;