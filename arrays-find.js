let articles = [
  { name: 'TV', price: 2500 },
  { name: 'Bicycle', price: 3000 },
  { name: 'Book', price: 320 },
  { name: 'Book', price: 325 },
  { name: 'Smartphone', price: 5000 },
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 500 },
  { name: 'Headphones', price: 1000 },
]

// Find, returns the first item that matches the condition
let findArticle = articles.find(function (article) {
  return article.name === 'Book'
})
console.log('Find article: \n', findArticle)
