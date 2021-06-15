// function car(brand, model, year) {
//   this.brand = brand
//   this.model = model
//   this.year = year
// }

// ES2015 Class
class car {
  constructor(id, brand, model, year) {
    this.id = id
    this.brand = brand
    this.model = model
    this.year = year
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const brands = ['Tesla', 'Toyota', 'Ford', 'BMW']
const models = ['Model S', 'Model 3', 'Model X', 'Corolla', 'X6', 'Z4']
const years = ['2018', '2019', '2020', '2021']
let cars = []

for (let i = 0; i < 30; i++) {
  let brand = brands[getRandomInt(brands.length)]
  let model = models[getRandomInt(models.length)]
  let year = years[getRandomInt(years.length)]
  cars.push(new car(i + 1, brand, model, year))
}

for (const car of cars) {
  console.log(car)
}

// let newCar = new car('Tesla', 'Model 3', '2021')
// console.log(newCar)

// let newCar2 = new car('Tesla', 'Model X', '2020')
// console.log(newCar2)

// let newCar3 = new car('Toyota', 'Corolla', '2015')
// console.log(newCar3)
