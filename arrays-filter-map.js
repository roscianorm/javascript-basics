let articles = [
  { name: 'TV', price: 2500 },
  { name: 'Bicycle', price: 3000 },
  { name: 'Book', price: 320 },
  { name: 'Smartphone', price: 5000 },
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 500 },
  { name: 'Headphones', price: 1000 },
]

// Filter, returns the articles that matches the condition
const filteredArticles = articles.filter(function (article) {
  return article.price <= 500
})
console.log('Filtered articles: \n', filteredArticles)

// Map, returns the value of the properties specified
const mappedArticles = articles.map(function (article) {
  return article.name
})
console.log('Mapped articles: \n', mappedArticles)
