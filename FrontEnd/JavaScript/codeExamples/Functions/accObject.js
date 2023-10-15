//Creating a BankAccount Objec

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.deposit = function(amount) {
      this.balance += amount;
    };
    this.withdraw = function(amount) {
      this.balance -= amount;
    };
  }
  
  const myAccount = new BankAccount('123456789', 1000);
  myAccount.deposit(500);
  console.log(myAccount.balance); 
  // Output: 1500
  