/*
create a class in JS as `product` that represents a product in an online store. 
The class should have the following properties:
1. `productId` - immutable
2. `productName` - mutable
3. `productPrice` - mutable
The class should provide the following methods:
1. getProductId() - Returns the immutable productId.
2. setProductName(name) - Allows you to change the productName.
3. setProductPrice(price) - Allows you to change the productPrice.
Implement the product class and demonstrate its functinality.
*/


class Product {
    constructor(productId, productName, productPrice) {
        this._productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
    }
    // method to get immutable property vlaue
    getProductId() {return this._productId }
    // method to set ,utable property vlaue
    setProductName(productNamevalue) { this.productName = productNamevalue}
    // method to set ,utable property vlaue
    setProductPrice(productPriceValue) { this.productPrice = productPriceValue}
}

const productObj = new Product(111,  "Apple", 100);
console.log(productObj);
console.log(productObj.getProductId);
console.log(productObj.productName);
console.log(productObj.setProductName("Gaming Laptop"));
console.log(productObj.setProductPrice(100000));


console.log(productObj);