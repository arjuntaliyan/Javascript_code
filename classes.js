// Declaring a class

class Product {
    constructor(iteamName){ //price, discount, productCode) {
           this.iteamName = iteamName;
        // this.price = price;
        // this.discount = discount;
        // this.productCode = productCode;
    }

    getiteamName(){
        return this.iteamName + " is a Product";
    }
}

class Furniture extends Product {
    constructor(iteamName){
        super(iteamName);
    }

    getiteamName(){
        return this.iteamName + " is a Furniture";
    }
}

let pencil = new Product('Pencil', 20, 2, 'PI90');
let chair = new Furniture('Chair', 499, 15, 'C10')

// const Product1 = class Product {
//     constructor(iteamName, price, discount, productCode) {
//         this.iteamName = iteamName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDiscountValue(){
//         return this.discount
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
// };

// let chair = new Product1('Chair', 499, 15, 'C10')