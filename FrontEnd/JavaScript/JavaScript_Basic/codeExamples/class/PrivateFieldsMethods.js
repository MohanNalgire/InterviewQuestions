class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return `Deposited ${amount}. Current balance is ${this.#balance}`;
    }

    #calculateInterest(){
        return this.#balance * 0.05;
    }

    getInterest(){
        return `Interest on balance:${this.#calculateInterest()}`;
    }
}

const account = new BankAccount();
console.log(account.deposit(10000));
console.log(account.getInterest());
