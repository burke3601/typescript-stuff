import products from './products';

const productName : string = 'beanie';
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

const shippingAddress : string = '123 Main St., Atlanta, GA'

const product = products.filter(product => product.name === productName)[0];



if (product.preOrder === true ){
  console.log('we can ship that to you')
}

if (Number(product.price) > 25){
  shipping = 0;
  console.log("FREE SHIPPING!!!!!")
} else{
  shipping = 5;
}
if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = .05;
}

taxTotal = Number(product.price) * taxPercent;
total = taxTotal + shipping + Number(product.price);




console.log(product);

console.log( `
Product: ${product.name}
Address: ${shippingAddress}
Price: $${product.price}
Tax: $${taxTotal}
Shipping: $${shipping}
Total Amount: $${total}
`)