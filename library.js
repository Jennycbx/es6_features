class Library {
  constructor(books = []) {
    this.books = books;
  }

// const Library = function (books = []) {
//   this.books = books;
// };
  
bookCount() {
  return this.books.length;
  }

// Library.prototype.bookCount = function () {
//   return this.books.length;
// };

addBook(newBook) {
  this.books.push(newBook);
}

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

addBooks(newBooks) {
  this.books = [...this.books, ...newBooks];
}

// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };

printInventory() {
  this.books.forEach(({author, title}) => {
    console.log(`${title} by ${author}`)
  })
}

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

}
 export default Library;
// module.exports = Library;
