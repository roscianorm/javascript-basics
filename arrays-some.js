let articles = [
  { name: 'TV', price: 2500 },
  { name: 'Bicycle', price: 3000 },
  { name: 'Book', price: 320 },
  { name: 'Smartphone', price: 5000 },
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 500 },
  { name: 'Headphones', price: 1000 },
]

let cheapArticles = articles.some(function (article) {
  return article.price <= 700
})
console.log(
  'Is there any article which price is below o equal to 700',
  cheapArticles
)
