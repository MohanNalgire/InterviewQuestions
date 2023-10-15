function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

const product1 = new Product("Laptop", 800, "Electronics");
const product2 = new Product("Book", 20, "Books");

console.log(product1);
console.log(product2);
/* Output:
Product { name: 'Laptop', price: 800, category: 'Electronics' }
Product { name: 'Book', price: 20, category: 'Books' }
*/
function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.getInfo = function() {
      return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
    };
  }
  
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
  console.log(book1.title);           
  console.log(book1.getInfo());  
   // Output: The Great Gatsby    
   // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925
  