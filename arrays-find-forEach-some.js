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

// The find method returns the first item that matches the condition
let findArticle = articles.find(function (article) {
  return article.name === 'Book'
})
console.log('find() article: \n', findArticle)

// The forEach method executes a provided function once for each array element.
let forEachLoop = []
articles.forEach(function (article) {
  forEachLoop.push(article.name)
})
console.log('forEach(): \n', forEachLoop)

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
let cheapArticles = articles.some(function (article) {
  return article.price <= 700
})
console.log(
  'some(): \nIs there any article which price is below or equal to 700?',
  cheapArticles
)
