//BAGIAN 10 Frequency Counting
const products = [
  { name: "Laptop", category: "Elektronik", tags: ["gadget", "kerja", "tech"], rating: 4.7 },
  { name: "Mouse", category: "Elektronik", tags: ["gadget", "aksesoris"], rating: 3.8 },
  { name: "Kaos", category: "Pakaian", tags: ["casual", "fashion"], rating: 4.2 },
  { name: "Celana", category: "Pakaian", tags: ["casual", "kerja"], rating: 4.5 }
];
const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
//Latihan 10.1
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
    return counts;
    }, {});
}
//Latihan 10.2
const categoryFrequency = countFrequency(products.map(p => p.category));
const tagFrequency = countFrequency(products.flatMap(p => p.tags));
const ratingFrequency = countFrequency(products.map(p => Math.round(p.rating)));
console.log("Category Frequency:", categoryFrequency);
console.log("Tag Frequency:", tagFrequency);
console.log("Rating Frequency:", ratingFrequency);