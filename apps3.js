//BAGIAN 3 Nested Data
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];
//Latihan 3.1
const allProductsTags = products.map(p => p.tags);
console.log(allProductsTags);
//Latihan 3.2
function findProductByTag(products, tag) {
    return products.filter(p => p.tags.includes(tag));
}
//Latihan 3.3
const pTotalReviews = products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length,
}));
console.log(pTotalReviews);
//Latihan 3.4
const pFiveStarReviews = [];
for (const product of products) {
    for (const review of product.reviews) {
        if (review.rating === 5) {
            pFiveStarReviews.push(review);
        }
    }
}
console.log(pFiveStarReviews);
//Latihan 3.5
function calculateAverageRating(product) {
        let totalRating = 0;
    for (const review of product.reviews) {
        totalRating += review.rating;
    }
    return totalRating / product.reviews.length;
}
const pAvgRating = products.map(p => ({
    id: p.id,
    title: p.title,
    averageRating: calculateAverageRating(p)
}));
console.log(pAvgRating);
//Latihan 3.6
let pMostReviewed = products[0];
for (const product of products) {
    if (product.reviews.length > pMostReviewed.reviews.length) {
        pMostReviewed = product;
    }
}
console.log(pMostReviewed);
//Latihan 3.7
const allRatings = [];
for (const product of products) {
    for (const review of product.reviews) {
        allRatings.push(review.rating);
    }
}
console.log(allRatings);