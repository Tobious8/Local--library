function getTotalBooksCount(books) {
  const result = books.reduce(book => book + 1, 0);
  return result;
}

function getTotalAccountsCount(accounts) {
  const result = accounts.reduce(account => account + 1, 0);
  return result;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = 0;
  for(let i = 0; i < books.length; i++) {
    const book = books[i];
    for(let j = 0; j < book.borrows.length; j++){    
      const bookBorrow = book.borrows[j];
    if(bookBorrow.returned === false) {
       booksBorrowed += 1;
    }
    } 
  }
  return booksBorrowed;
}

function helperGenre(books){
  let countGenre = {};
  books.forEach((book) => {
    if(countGenre[book.genre] != null)  {
      countGenre[book.genre]++
    } else { countGenre[book.genre] = 1;
    }
  });
  return countGenre;
}

function getMostCommonGenres(books) {
  let countGenre = helperGenre(books);
  let countArray = [];
 for(const [key, value] of Object.entries(countGenre)) {
    countArray.push({
      'name' : key,
      'count' : value
    });
}
  countArray.sort((count1, count2) => count2.count - count1.count);
  return countArray.slice(0, 5);  
}

function getMostPopularBooks(books) {
  const borrows = books.map((book) => ({
    name: book.title, count: book.borrows.length
    }));
      borrows.sort((one, two) => two.count - one.count);
      return borrows.slice(0, 5);
}

function getAuthor(authors, authorId){
  for(let author in authors){
    if(authors.id === authorId) {
      return author;
    }
  }
  return null;
}

function getMostPopularAuthors(books, authors) {
  function getAuthorById (authors, authorId) {
    return authors.find((author) => author.id === authorId);}
  const bookAuthors = [];
  books.forEach((book) => {
    const match = bookAuthors.find((author) => author.id === book.authorId);
    if(match) { match.count += book.borrows.length;}
    else {
      const writer = getAuthorById(authors, book.authorId);
      const count = book.borrows.length;
      const name = writer.name;
      bookAuthors.push({name: `${name.first} ${name.last}`, count,});
    } });
  let result = bookAuthors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1);
  result = result.slice(0, 5);
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
