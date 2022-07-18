function findAuthorById(authors, id) {
  let matchingId = authors.find((author) => author.id === id);
  return matchingId;
}

function findBookById(books, id) {
  let matchingBookId = books.find((book) => book.id === id);
  return matchingBookId;
}
function partitionBooksByBorrowedStatus(books) {
  let bookArray = [];
  const borrowBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned === true);
  bookArray.push(borrowBooks, returnedBooks);
  return bookArray;
}  
function getBorrowersForBook(book, accounts) {
  const borrowArray=book.borrows;
  const result=[]; 
  borrowArray.forEach((obj)=>{
    const id=obj.id;
    const acc=accounts.find((account)=>account.id===id);   
    acc.returned=obj.returned;
    if(result.length<10){
        result.push(acc);
    }
  })
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
