function findAccountById(accounts, id) {
  let accountById = accounts.find((account) => account.id === id);
  return accountById;
}

function sortAccountsByLastName(accounts) {
accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  for(let i = 0; i < books.length; i++) {
    const book = books[i];
    for(let j = 0; j < book.borrows.length; j++) {
      const bookBorrow = book.borrows[j];
    if(bookBorrow.id === account.id) {
      numberOfBorrows += 1;
    }
    }
  }
  return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = [];
books.forEach(book => {
  if( book.borrows.find(item => item.id === account.id && !item.returned)) {
    checkedOut.push(book);
  }
})
  checkedOut.forEach(book => {
    let anAuthor = authors.find(person => person.id === book.authorId);
    book[`author`] = anAuthor;
  })
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
