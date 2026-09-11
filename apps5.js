//BAGIAN 6 Searching (Linear Search)
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Gaming Mouse", price: 60, category: "accessories", stock: 12 },
  { id: 5, title: "Mechanical Keyboard", price: 120, category: "accessories", stock: 8 },
  { id: 6, title: "Monitor", price: 300, category: "monitors", stock: 7 },
  { id: 7, title: "Tablet", price: 500, category: "tablets", stock: 10 },
  { id: 8, title: "Smartwatch", price: 200, category: "wearables", stock: 6 },
  { id: 9, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 14 },
  { id: 10, title: "Webcam", price: 90, category: "accessories", stock: 9 },
  { id: 11, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 4 },
  { id: 12, title: "Wireless Mouse", price: 40, category: "accessories", stock: 20 },
  { id: 13, title: "USB-C Hub", price: 50, category: "accessories", stock: 18 },
  { id: 14, title: "External SSD", price: 150, category: "storage", stock: 11 },
  { id: 15, title: "Power Bank", price: 70, category: "accessories", stock: 16 },
  { id: 16, title: "Wireless Earbuds", price: 130, category: "audio", stock: 13 },
  { id: 17, title: "Smart TV", price: 700, category: "television", stock: 5 },
  { id: 18, title: "Desktop PC", price: 1000, category: "computers", stock: 6 },
  { id: 19, title: "Graphics Card", price: 600, category: "components", stock: 3 },
  { id: 20, title: "RAM 16GB", price: 80, category: "components", stock: 25 },
  { id: 21, title: "Gaming Chair", price: 250, category: "furniture", stock: 7 },
  { id: 22, title: "Microphone", price: 110, category: "audio", stock: 10 },
  { id: 23, title: "Laptop Stand", price: 45, category: "accessories", stock: 17 },
  { id: 24, title: "External HDD", price: 100, category: "storage", stock: 12 },
  { id: 25, title: "Projector", price: 450, category: "display", stock: 4 },
  { id: 26, title: "Printer", price: 180, category: "printers", stock: 8 },
  { id: 27, title: "Smartphone Pro", price: 1100, category: "phones", stock: 9 },
  { id: 28, title: "Tablet Pro", price: 750, category: "tablets", stock: 5 },
  { id: 29, title: "Gaming Headset", price: 140, category: "audio", stock: 11 },
  { id: 30, title: "Wi-Fi Router", price: 90, category: "networking", stock: 14 }
];
//Latihan 6.1
function linearSearch(array, target) {
 for (let i = 0; i < array.length; i++) {
 if (array[i] === target) return i;
 }
 return -1;
}
//Latihan 6.2
function linearSearch(products, id) {
 for (let i = 0; i < products.length; i++) {
 if (products[i].id === id) return i;
 }
 return -1;
}
console.log(linearSearch(products, 5));
//BAGIAN 7 Searching (Binary Search)
//Latihan 7.1
function binarySearch(arr, target) {
 let left = 0;
 let right = arr.length - 1;
 while (left <= right) {
 const mid = Math.floor((left + right) / 2);
 if (arr[mid] === target) return mid;
 if (arr[mid] < target) left = mid + 1;
 else right = mid - 1;
 }
 return -1;
}
//Latihan 7.2
function binarySearchByPrice(products, targetPrice) {
    products.sort((a, b) => a.price - b.price);
 let left = 0;
 let right = products.length - 1;
 while (left <= right) {
 const mid = Math.floor((left + right) / 2);
 if (products[mid].price === targetPrice) return mid;
 if (products[mid].price < targetPrice) left = mid + 1;
 else right = mid - 1;
 }
 return -1;
}
console.log(binarySearchByPrice(products, 1200));
//BAGIAN 8 Sorting
const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending
products.sort((a, b) => a.price - b.price); // custom comparator
//Latihan 8.1
function bubbleSort(numbers) {
 const arr = [...numbers];
 for (let i = 0; i < arr.length - 1; i++) {
 for (let j = 0; j < arr.length - 1 - i; j++) {
 if (arr[j] > arr[j + 1]) {
 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
 }
 }
 }
 return arr;
}
console.log(bubbleSort(numbers));
//Latihan 8.2
function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortBy === "rating") {
        sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    else if (sortBy === "title") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sortedProducts;
}
console.log(sortProducts(products, "price-desc"));
