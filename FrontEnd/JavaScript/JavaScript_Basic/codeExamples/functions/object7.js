function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  const myBook = new Book("Harry Potter", "J.K. Rowling");
  console.log(myBook.title);