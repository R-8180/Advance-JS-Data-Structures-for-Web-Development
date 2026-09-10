//BAGIAN 1 JavaScript Fundamentals dari Sudut Pandang Problem Solving
const cart = [
 { title: "Laptop", price: 1000, discountPercent: 10 },
 { title: "Mouse", price: 20, discountPercent: 5 },
 { title: "Keyboard", price: 50, discountPercent: 0 }
];
//Latihan 1.1  
function calculateDiscountedPrice(price, discountPercent) {
 return price - (price * discountPercent) / 100;
}
//Latihan 1.2
function applyDiscounts(cart) {
 const result = [];
 for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);

    result.push({
        title: item.title,
        price: item.price,
        discountPercent: item.discountPercent,
        finalPrice: finalPrice
    });
 }
 return result;
}
console.log(applyDiscounts(cart));

