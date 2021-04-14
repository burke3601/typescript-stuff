"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = 'beanie';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '123 Main St., Atlanta, GA';
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
if (product.preOrder === true) {
    console.log('we can ship that to you');
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log("FREE SHIPPING!!!!!");
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = .05;
}
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + shipping + Number(product.price);
console.log(product);
console.log("\nProduct: " + product.name + "\nAddress: " + shippingAddress + "\nPrice: $" + product.price + "\nTax: $" + taxTotal + "\nShipping: $" + shipping + "\nTotal Amount: $" + total + "\n");
