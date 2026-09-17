//BAGIAN 11 SET
const products = [
  { name: "Laptop", category: "Elektronik", tags: ["gadget", "kerja", "tech"], rating: 4.7 },
  { name: "Mouse", category: "Elektronik", tags: ["gadget", "aksesoris"], rating: 3.8 },
  { name: "Kaos", category: "Pakaian", tags: ["casual", "fashion"], rating: 4.2 },
  { name: "Celana", category: "Pakaian", tags: ["casual", "kerja"], rating: 4.5 }
];
//Latihan 11.1
const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];
console.log("Unique Categories:", uniqueCategories);
console.log("Unique Tags:", uniqueTags);